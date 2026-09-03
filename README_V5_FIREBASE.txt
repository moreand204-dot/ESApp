ES App v5.0 — Firebase SMS + WhatsApp-style UI

WHAT CHANGED
- Phone login SMS is handled by native Firebase Phone Authentication.
- The old server-generated/logged OTP flow is removed from the login UI.
- After Firebase verifies the phone, Android sends the Firebase ID token to POST /auth/firebase-login; the backend verifies that signed token before issuing the ES session.
- Settings were reorganized into WhatsApp-style sections with persistent switches.
- Bottom navigation keeps its four icons visible: Chats, Updates, Communities, Calls.
- Entering a conversation does NOT focus the message field; the keyboard appears only after the user taps the field.
- Owner panel now has account controls plus report review, including verify, restrict/unrestrict, block/unblock, temporary ban and temporary-ban removal.
- Owner phone remains 201092178171 and is promoted to OWNER + verified after successful Firebase login.

FIREBASE IS THE ONE REQUIRED EXTERNAL CONFIGURATION
1. Firebase Console → Authentication → Sign-in method → enable Phone.
2. Register Android package: com.es.app.
3. Download google-services.json and replace app/google-services.json in this project.
4. On the backend, create a Firebase Admin service account and set FIREBASE_SERVICE_ACCOUNT_JSON, or use Google Application Default Credentials.
5. Backend requires Node.js 22+ for current Firebase Admin SDK.

BUILD
- Android: open the project in Android Studio/AIDE with Gradle support and build the app module.
- Backend: npm install, then npm start.
- Copy .env.example to .env and set FIREBASE_SERVICE_ACCOUNT_JSON plus a strong JWT_SECRET.

NOTE
A real Firebase project cannot be fabricated inside the ZIP: google-services.json contains the identifiers for YOUR Firebase project. The included file is only a build-time placeholder and must be replaced before real SMS login.
