package com.es.app;

import android.Manifest;
import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.view.View;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.JavascriptInterface;

import com.google.firebase.FirebaseApp;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.FirebaseException;
import com.google.firebase.auth.PhoneAuthCredential;
import com.google.firebase.auth.PhoneAuthOptions;
import com.google.firebase.auth.PhoneAuthProvider;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class MainActivity extends Activity {

    private WebView webView;
    private static final int MEDIA_PERMISSION = 7001;
    private static final int FILE_CHOOSER_REQUEST = 7002;

    // Bridges WebView's <input type="file"> flow to a real Android
    // activity result (gallery picker or camera capture).
    private ValueCallback<Uri[]> filePathCallback;
    private Uri cameraPhotoUri;
    private FirebaseAuth firebaseAuth;
    private String firebaseVerificationId;
    private PhoneAuthProvider.ForceResendingToken firebaseResendToken;
    private PermissionRequest pendingWebPermissionRequest;

    @Override
    public void onCreate(Bundle state) {
        super.onCreate(state);

        webView = new WebView(this);
        setContentView(webView);

        try {
            FirebaseApp.initializeApp(this);
            firebaseAuth = FirebaseAuth.getInstance();
        } catch (Exception e) {
            firebaseAuth = null;
        }

        WebSettings s = webView.getSettings();

        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setAllowContentAccess(true);
        s.setBuiltInZoomControls(false);
        s.setDisplayZoomControls(false);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setUserAgentString(
            s.getUserAgentString() + " ESApp/4.0"
        );

        webView.clearCache(true);

        webView.setWebViewClient(new WebViewClient());

        webView.setWebChromeClient(new WebChromeClient() {

            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                MainActivity.this.runOnUiThread(new Runnable() {
                    @Override public void run() {
                        if (Build.VERSION.SDK_INT < 23) {
                            request.grant(request.getResources());
                            return;
                        }
                        boolean audio = false, camera = false;
                        for (String r : request.getResources()) {
                            if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(r)) audio = true;
                            if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(r)) camera = true;
                        }
                        java.util.ArrayList<String> needed = new java.util.ArrayList<>();
                        if (audio && checkSelfPermission(Manifest.permission.RECORD_AUDIO) != android.content.pm.PackageManager.PERMISSION_GRANTED) needed.add(Manifest.permission.RECORD_AUDIO);
                        if (camera && checkSelfPermission(Manifest.permission.CAMERA) != android.content.pm.PackageManager.PERMISSION_GRANTED) needed.add(Manifest.permission.CAMERA);
                        if (needed.isEmpty()) request.grant(request.getResources());
                        else { pendingWebPermissionRequest = request; requestPermissions(needed.toArray(new String[0]), MEDIA_PERMISSION); }
                    }
                });
            }

            // Without this override, tapping ANY <input type="file"> in the
            // page (gallery/camera/sticker pickers, avatar upload) does
            // nothing at all — WebView silently ignores the click. This
            // wires it up to a real chooser that offers both "take photo"
            // and "pick from gallery", like WhatsApp's attach sheet.
            //
            // The camera photo is saved straight into the public MediaStore
            // (Environment.DIRECTORY_PICTURES), which hands back a
            // content:// Uri directly — no FileProvider / androidx
            // dependency required, so this builds fine even on toolchains
            // that can't fetch Maven dependencies.
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
                if (filePathCallback != null) {
                    filePathCallback.onReceiveValue(null);
                }
                filePathCallback = callback;

                Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                cameraPhotoUri = createCameraPhotoUri();
                if (cameraPhotoUri != null) {
                    takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, cameraPhotoUri);
                } else {
                    takePictureIntent = null;
                }

                Intent contentSelectionIntent = new Intent(Intent.ACTION_GET_CONTENT);
                contentSelectionIntent.addCategory(Intent.CATEGORY_OPENABLE);
                String[] acceptTypes = params.getAcceptTypes();
                String mimeType = "*/*";
                if (acceptTypes != null && acceptTypes.length > 0 && acceptTypes[0].length() > 0) {
                    mimeType = acceptTypes[0];
                }
                contentSelectionIntent.setType(mimeType);

                Intent[] initialIntents = (takePictureIntent != null)
                    ? new Intent[]{takePictureIntent}
                    : new Intent[0];

                Intent chooserIntent = new Intent(Intent.ACTION_CHOOSER);
                chooserIntent.putExtra(Intent.EXTRA_INTENT, contentSelectionIntent);
                chooserIntent.putExtra(Intent.EXTRA_TITLE, "اختر صورة");
                chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, initialIntents);

                startActivityForResult(chooserIntent, FILE_CHOOSER_REQUEST);
                return true;
            }
        });

        webView.setOverScrollMode(View.OVER_SCROLL_NEVER);
        webView.addJavascriptInterface(new FirebaseBridge(), "ESFirebase");

        webView.loadUrl("file:///android_asset/index.html");
    }

    // Inserts a new empty row into the public MediaStore images collection
    // and returns its content:// Uri — the camera app then writes the
    // photo straight into it. Plain android.provider.MediaStore, no
    // extra library needed.
    private class FirebaseBridge {
        @JavascriptInterface
        public void requestPhoneCode(final String phone) {
            runOnUiThread(new Runnable() {
                @Override public void run() {
                    if (firebaseAuth == null) {
                        jsError("Firebase غير مهيأ. أضف google-services.json للمشروع.");
                        return;
                    }
                    try {
                        PhoneAuthOptions options = PhoneAuthOptions.newBuilder(firebaseAuth)
                            .setPhoneNumber(phone)
                            .setTimeout(60L, java.util.concurrent.TimeUnit.SECONDS)
                            .setActivity(MainActivity.this)
                            .setCallbacks(new PhoneAuthProvider.OnVerificationStateChangedCallbacks() {
                                @Override public void onVerificationCompleted(PhoneAuthCredential credential) {
                                    signInWithCredential(credential);
                                }
                                @Override public void onVerificationFailed(FirebaseException e) {
                                    jsError(e.getMessage() == null ? "فشل إرسال رمز التحقق" : e.getMessage());
                                }
                                @Override public void onCodeSent(String verificationId,
                                        PhoneAuthProvider.ForceResendingToken token) {
                                    firebaseVerificationId = verificationId;
                                    firebaseResendToken = token;
                                    runJs("window.nativeFirebaseCodeSent && window.nativeFirebaseCodeSent();");
                                }
                            })
                            .build();
                        PhoneAuthProvider.verifyPhoneNumber(options);
                    } catch (Exception e) {
                        jsError(e.getMessage() == null ? "تعذر بدء التحقق" : e.getMessage());
                    }
                }
            });
        }

        @JavascriptInterface
        public void resendPhoneCode(final String phone) {
            requestPhoneCode(phone);
        }

        @JavascriptInterface
        public void verifyPhoneCode(final String code) {
            runOnUiThread(new Runnable() {
                @Override public void run() {
                    if (firebaseAuth == null || firebaseVerificationId == null) {
                        jsError("جلسة التحقق غير متاحة. اطلب رمزًا جديدًا.");
                        return;
                    }
                    try {
                        PhoneAuthCredential credential = PhoneAuthProvider.getCredential(firebaseVerificationId, code);
                        signInWithCredential(credential);
                    } catch (Exception e) {
                        jsError(e.getMessage() == null ? "رمز التحقق غير صحيح" : e.getMessage());
                    }
                }
            });
        }

        private void signInWithCredential(PhoneAuthCredential credential) {
            firebaseAuth.signInWithCredential(credential).addOnCompleteListener(
                new com.google.android.gms.tasks.OnCompleteListener<com.google.firebase.auth.AuthResult>() {
                    @Override
                    public void onComplete(com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult> task) {
                        if (!task.isSuccessful() || firebaseAuth.getCurrentUser() == null) {
                            jsError(task.getException() != null ? task.getException().getMessage() : "تعذر تسجيل الدخول");
                            return;
                        }
                        firebaseAuth.getCurrentUser().getIdToken(true).addOnCompleteListener(
                            new com.google.android.gms.tasks.OnCompleteListener<com.google.firebase.auth.GetTokenResult>() {
                                @Override
                                public void onComplete(com.google.android.gms.tasks.Task<com.google.firebase.auth.GetTokenResult> tokenTask) {
                                    if (!tokenTask.isSuccessful() || tokenTask.getResult() == null) {
                                        jsError("تعذر الحصول على رمز Firebase");
                                        return;
                                    }
                                    String idToken = tokenTask.getResult().getToken();
                                    if (idToken == null) {
                                        jsError("تعذر الحصول على رمز Firebase");
                                        return;
                                    }
                                    runJs("window.nativeFirebaseAuthSuccess && window.nativeFirebaseAuthSuccess(" +
                                        org.json.JSONObject.quote(idToken) + ");");
                                }
                            });
                    }
                });
        }

        private void jsError(String message) {
            runJs("window.nativeFirebaseAuthError && window.nativeFirebaseAuthError(" +
                org.json.JSONObject.quote(message == null ? "حدث خطأ" : message) + ");");
        }
    }

    private void runJs(final String js) {
        runOnUiThread(new Runnable() {
            @Override public void run() {
                if (webView != null) webView.evaluateJavascript(js, null);
            }
        });
    }

    private Uri createCameraPhotoUri() {
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss", Locale.US).format(new Date());
        ContentValues values = new ContentValues();
        values.put(MediaStore.Images.Media.DISPLAY_NAME, "ES_" + timeStamp + ".jpg");
        values.put(MediaStore.Images.Media.MIME_TYPE, "image/jpeg");
        if (Build.VERSION.SDK_INT >= 29) {
            values.put(MediaStore.Images.Media.RELATIVE_PATH, Environment.DIRECTORY_PICTURES + "/ESApp");
        }
        return getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode != FILE_CHOOSER_REQUEST || filePathCallback == null) {
            super.onActivityResult(requestCode, resultCode, data);
            return;
        }

        Uri[] results = null;

        if (resultCode == Activity.RESULT_OK) {
            if (data == null || data.getDataString() == null) {
                // No data means it came back from the camera — the photo
                // was written straight into cameraPhotoUri above.
                if (cameraPhotoUri != null) {
                    results = new Uri[]{cameraPhotoUri};
                }
            } else {
                String dataString = data.getDataString();
                if (dataString != null) {
                    results = new Uri[]{Uri.parse(dataString)};
                }
            }
        }

        filePathCallback.onReceiveValue(results);
        filePathCallback = null;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == MEDIA_PERMISSION && pendingWebPermissionRequest != null) {
            boolean ok = true;
            for (int result : grantResults) if (result != android.content.pm.PackageManager.PERMISSION_GRANTED) ok = false;
            PermissionRequest request = pendingWebPermissionRequest;
            pendingWebPermissionRequest = null;
            if (ok) request.grant(request.getResources()); else request.deny();
        }
    }

    @Override
    public void onBackPressed() {
        if (webView == null) {
            super.onBackPressed();
            return;
        }
        webView.evaluateJavascript(
            "(function(){try{return typeof appBack==='function' ? !!appBack() : false}catch(e){return false}})()",
            new ValueCallback<String>() {
                @Override
                public void onReceiveValue(String handled) {
                    if (!"true".equals(handled)) {
                        MainActivity.super.onBackPressed();
                    }
                }
            }
        );
    }
}
