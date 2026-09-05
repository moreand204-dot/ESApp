const $=id=>document.getElementById(id);const icon=n=>`<svg><use href="#${n}"/></svg>`;

/* ================= i18n ================= */
const STR={
  chats:{ar:'الدردشات',en:'Chats'},updates:{ar:'التحديثات',en:'Updates'},communities:{ar:'المجتمعات',en:'Communities'},
  calls:{ar:'المكالمات',en:'Calls'},settings:{ar:'الإعدادات',en:'Settings'},search:{ar:'بحث',en:'Search'},
  all:{ar:'الكل',en:'All'},unread:{ar:'غير مقروءة',en:'Unread'},groups:{ar:'المجموعات',en:'Groups'},
  noChats:{ar:'لا توجد محادثات',en:'No chats yet'},startChat:{ar:'ابدأ محادثة جديدة لإظهارها هنا.',en:'Start a new chat to see it here.'},
  searchHint:{ar:'البحث في المحادثات',en:'Search chats'},noResults:{ar:'لا توجد نتائج.',en:'No results.'},
  newChat:{ar:'محادثة جديدة',en:'New chat'},newGroup:{ar:'مجموعة جديدة',en:'New group'},esGroup:{ar:'مجموعة ES',en:'ES Group'},
  markAllRead:{ar:'تحديد الكل كمقروء',en:'Mark all as read'},about:{ar:'حول ES App',en:'About ES App'},
  resetDemo:{ar:'إعادة بيانات التجربة',en:'Reset demo data'},createChatBtn:{ar:'إنشاء محادثة',en:'Create chat'},createGroupBtn:{ar:'إنشاء مجموعة',en:'Create group'},
  startNow:{ar:'ابدأ المحادثة الآن',en:'Start the chat now'},now:{ar:'الآن',en:'now'},

  // settings page
  account:{ar:'الحساب',en:'Account'},preferences:{ar:'التفضيلات',en:'Preferences'},support:{ar:'الدعم',en:'Support'},
  subscriptions:{ar:'الاشتراكات',en:'Subscriptions'},subscriptionsSub:{ar:'اكتشف مزايا الاشتراك المميز',en:'Discover premium features'},
  devices:{ar:'الأجهزة المرتبطة',en:'Linked devices'},devicesSub:{ar:'استخدم ES App على أجهزة أخرى',en:'Use ES App on other devices'},
  accountRow:{ar:'الحساب',en:'Account'},accountSub:{ar:'الاسم، الرقم، والملف الشخصي',en:'Name, number and profile'},
  privacy:{ar:'الخصوصية',en:'Privacy'},privacySub:{ar:'آخر ظهور، إيصالات القراءة، الحظر',en:'Last seen, read receipts, blocking'},
  lists:{ar:'القوائم',en:'Lists'},listsSub:{ar:'إدارة الأشخاص والمجموعات',en:'Manage people and groups'},
  chatsRow:{ar:'الدردشات',en:'Chats'},chatsSub:{ar:'سجل المحادثات والنسخ الاحتياطي',en:'Chat history and backup'},
  appearance:{ar:'المظهر',en:'Appearance'},appearanceSub:{ar:'Glass Dark ولون التطبيق',en:'Glass Dark and app color'},
  broadcasts:{ar:'البث',en:'Broadcast lists'},broadcastsSub:{ar:'إدارة القوائم وإرسال رسائل بث',en:'Manage lists and send broadcasts'},
  notifications:{ar:'الإشعارات',en:'Notifications'},notificationsSub:{ar:'نغمات الرسائل والمكالمات',en:'Message and call tones'},
  storage:{ar:'التخزين والبيانات',en:'Storage and data'},storageSub:{ar:'استخدام الشبكة والتنزيل التلقائي',en:'Network usage and auto-download'},
  parental:{ar:'الرقابة الأبوية',en:'Parental controls'},parentalSub:{ar:'إعدادات لعائلتك',en:'Settings for your family'},
  accessibility:{ar:'إمكانية الوصول',en:'Accessibility'},accessibilitySub:{ar:'زيادة التباين، الحركة',en:'Increase contrast, motion'},
  language:{ar:'لغة التطبيق',en:'App language'},
  help:{ar:'المساعدة والدعم',en:'Help and support'},helpSub:{ar:'مركز المساعدة والتواصل معنا',en:'Help center and contact us'},
  invite:{ar:'دعوة صديق',en:'Invite a friend'},inviteSub:{ar:'شارك ES App مع أصدقائك',en:'Share ES App with your friends'},
  appUpdates:{ar:'تحديثات التطبيق',en:'App updates'},appUpdatesSub:{ar:'تحقق من وجود إصدار جديد',en:'Check for a new version'},
  aboutSub:{ar:'الإصدار والمعلومات',en:'Version and information'},
  ok:{ar:'حسنًا',en:'OK'},save:{ar:'حفظ',en:'Save'},close:{ar:'إغلاق',en:'Close'},

  // profile edit (matches WhatsApp profile screenshot)
  name:{ar:'الاسم',en:'Name'},setName:{ar:'اكتب اسمك',en:'Set your name'},
  aboutField:{ar:'حول',en:'About'},setAbout:{ar:'اضبط الحالة',en:'Set About'},
  reservedUsername:{ar:'اسم مستخدم محجوز',en:'Reserved username'},setUsername:{ar:'اضبط اسم المستخدم',en:'Set username'},
  phone:{ar:'الهاتف',en:'Phone'},links:{ar:'الروابط',en:'Links'},addLinks:{ar:'إضافة روابط',en:'Add links'},
  localProfile:{ar:'ملف شخصي محلي',en:'Local profile'},

  // chats settings sheet
  backup:{ar:'النسخ الاحتياطي',en:'Backup'},backupSub:{ar:'حفظ نسخة من محادثاتك محليًا',en:'Save a local copy of your chats'},
  clearAllChats:{ar:'مسح كل المحادثات',en:'Clear all chats'},clearAllChatsSub:{ar:'إعادة تعيين بيانات التجربة',en:'Reset demo data'},
  msgNotif:{ar:'إشعارات الرسائل',en:'Message notifications'},msgNotifSub:{ar:'تنبيه عند وصول رسالة جديدة',en:'Alert on new message'},
  groupNotif:{ar:'إشعارات المجموعات',en:'Group notifications'},groupNotifSub:{ar:'تنبيه عند وصول رسائل المجموعات',en:'Alert on group messages'},
  callTone:{ar:'نغمة المكالمات',en:'Call ringtone'},callToneSub:{ar:'تشغيل نغمة عند مكالمة واردة',en:'Play a tone for incoming calls'},
  lastSeen:{ar:'آخر ظهور',en:'Last seen'},lastSeenSub:{ar:'السماح بعرض آخر ظهور',en:'Allow others to see last seen'},
  readReceipts:{ar:'إيصالات القراءة',en:'Read receipts'},readReceiptsSub:{ar:'إظهار حالة القراءة',en:'Show read status'},
  chatLock:{ar:'قفل المحادثات',en:'Chat lock'},chatLockSub:{ar:'حماية المحادثات على هذا الجهاز',en:'Protect chats on this device'},
  highContrast:{ar:'زيادة التباين',en:'Increase contrast'},highContrastSub:{ar:'ألوان أوضح للنصوص والأزرار',en:'Clearer colors for text and buttons'},
  reduceMotion:{ar:'تقليل الحركة',en:'Reduce motion'},reduceMotionSub:{ar:'إيقاف الحركات والانتقالات',en:'Turn off animations and transitions'},
  arabic:{ar:'العربية',en:'Arabic'},english:{ar:'الإنجليزية',en:'English'},langHint:{ar:'(لغة الجهاز)',en:'(device language)'},
  langNote:{ar:'سيتم تطبيق اللغة الجديدة فورًا على كل شاشات التطبيق.',en:'The new language applies immediately across the whole app.'},

  // info sheets
  devicesInfo:{ar:'لا توجد أجهزة مرتبطة حاليًا. ربط الأجهزة الحقيقي يحتاج خادم مزامنة.',en:'No linked devices yet. Real device linking needs a sync server.'},
  subsInfo:{ar:'لا توجد مزايا مدفوعة في هذا النموذج المحلي بعد.',en:'No paid features in this local prototype yet.'},
  listsInfo:{ar:'إدارة الأشخاص والمجموعات في مكان واحد — قريبًا في هذا النموذج.',en:'Manage people and groups in one place — coming soon.'},
  broadcastsInfo:{ar:'أنشئ قائمة بث لإرسال نفس الرسالة لعدة أشخاص دفعة واحدة.',en:'Create a broadcast list to send the same message to many people at once.'},
  parentalInfo:{ar:'إعدادات خاصة بحسابات العائلة — قريبًا في هذا النموذج.',en:'Family account settings — coming soon in this model.'},
  storageInfo:{ar:'هذا نموذج محلي، لا يوجد استهلاك بيانات فعلي. سيتم عرض تفاصيل الشبكة والتنزيل التلقائي هنا لاحقًا.',en:'This is a local prototype — no real data usage. Network and auto-download details will show here later.'},
  helpInfo:{ar:'هذا نموذج أولي محلي لتطبيق ES. لأي استفسار تواصل مع فريق ES.',en:'This is a local prototype of ES App. For any question, contact the ES team.'},
  inviteInfo:{ar:'شارك ES App مع أصدقائك — ميزة المشاركة الحقيقية تحتاج ربط نظام التشغيل.',en:'Share ES App with your friends — real sharing needs OS integration.'},
  updateInfo:{ar:'أنت تستخدم أحدث إصدار محلي: ES App v3.5.',en:"You're on the latest local build: ES App v3.5."},

  // updates page
  updatesHero:{ar:'مكان للحالات والقنوات والتحديثات. الواجهة جاهزة والتفاعل يعمل محليًا.',en:'A place for status, channels and updates. The UI is ready and works locally.'},
  addStatus:{ar:'إضافة حالة',en:'Add status'},addStatusSub:{ar:'شارك تحديثًا جديدًا',en:'Share a new update'},
  createChannel:{ar:'إنشاء قناة',en:'Create channel'},statusPrivacy:{ar:'خصوصية الحالة',en:'Status privacy'},
  starred:{ar:'العناصر المميزة',en:'Starred'},adPrefs:{ar:'تفضيلات الإعلانات',en:'Ad preferences'},switchAccount:{ar:'تبديل الحساب',en:'Switch account'},
  statusPrivacyInfo:{ar:'اختر من يستطيع رؤية تحديثات حالتك.',en:'Choose who can see your status updates.'},
  starredInfo:{ar:'الرسائل والحالات المميزة تظهر هنا.',en:'Starred messages and statuses appear here.'},
  adPrefsInfo:{ar:'تحكم في تفضيلات الإعلانات المرتبطة بحسابك.',en:'Manage the ad preferences linked to your account.'},
  createChannelInfo:{ar:'أنشئ قناة للبث لجمهور غير محدود — قريبًا في هذا النموذج.',en:'Create a broadcast channel for an unlimited audience — coming soon.'},
  switchAccountInfo:{ar:'تبديل الحساب الحقيقي يحتاج أكثر من حساب مسجل على الجهاز.',en:'Switching accounts needs more than one signed-in account on this device.'},

  // communities
  communitiesHero:{ar:'نظم المجموعات والمحادثات في مساحة واحدة.',en:'Organize groups and chats in one space.'},
  createCommunity:{ar:'إنشاء مجتمع',en:'Create community'},
  communityIntroTitle:{ar:'إنشاء مجتمع جديد',en:'Create a new community'},
  communityIntroDesc:{ar:'اجمع حيًا أو مدرسة أو أكثر. أنشئ مجموعات مرتبة حسب الموضوع للأعضاء، وأرسل لهم إعلانات الإدارة بسهولة.',en:'Bring together a neighborhood, school or more. Create topic-based groups for members, and easily send them admin announcements.'},
  seeExamples:{ar:'شاهد أمثلة على المجتمعات',en:'See example communities'},
  getStarted:{ar:'ابدأ الآن',en:'Get started'},
  newCommunity:{ar:'مجتمع جديد',en:'New community'},
  communityName:{ar:'اسم المجتمع',en:'Community name'},
  changePhoto:{ar:'تغيير الصورة',en:'Change photo'},
  communityWelcome:{ar:'أهلًا بالجميع! هذا المجتمع مخصص للأعضاء للدردشة في مجموعات حسب الموضوع، والحصول على الإعلانات المهمة.',en:'Hi everyone! This community is for members to chat in topic-based groups and get important announcements.'},
  communityCreated:{ar:'تم إنشاء المجتمع محليًا. إدارة المجموعات داخله ستُضاف قريبًا.',en:'Community created locally. Managing groups inside it is coming soon.'},
  nameRequired:{ar:'اكتب اسم المجتمع أولًا',en:'Enter a community name first'},

  // calls page
  call:{ar:'اتصال',en:'Call'},schedule:{ar:'جدولة',en:'Schedule'},keypad:{ar:'لوحة الاتصال',en:'Keypad'},favorites:{ar:'المفضلة',en:'Favorites'},
  recent:{ar:'الأخيرة',en:'Recent'},noCalls:{ar:'لا توجد مكالمات بعد',en:'No calls yet'},encryptedCalls:{ar:'مكالماتك الشخصية مشفّرة',en:'Your personal calls are'},encryptedCallsBold:{ar:'من طرف إلى طرف',en:'end-to-end encrypted'},
  newCall:{ar:'مكالمة جديدة',en:'New call'},chooseContact:{ar:'اختيار جهة اتصال',en:'Choose a contact'},
  clearCallLog:{ar:'مسح سجل المكالمات',en:'Clear call log'},scheduledCalls:{ar:'المكالمات المجدولة',en:'Scheduled calls'},
  scheduleInfo:{ar:'جدولة مكالمة تحتاج تقويم متصل — قريبًا في هذا النموذج.',en:'Scheduling a call needs a connected calendar — coming soon.'},
  keypadInfo:{ar:'اطلب رقمًا مباشرة — الاتصال الحقيقي يحتاج خط اتصال فعّال.',en:'Dial a number directly — a real call needs an active line.'},
  favoritesInfo:{ar:'أضف جهات اتصال إلى المفضلة لتظهر هنا.',en:'Add contacts to favorites to see them here.'},
  scheduledCallsInfo:{ar:'لا توجد مكالمات مجدولة حاليًا.',en:'No scheduled calls right now.'},
  callLogCleared:{ar:'تم مسح سجل المكالمات.',en:'Call log cleared.'},
  outgoing:{ar:'صادرة',en:'Outgoing'},incoming:{ar:'واردة',en:'Incoming'},

  // per-chat menu (long-press) + chat header menu
  viewContact:{ar:'عرض جهة الاتصال',en:'View contact'},report:{ar:'إبلاغ',en:'Report'},block:{ar:'حظر',en:'Block'},
  muteNotif:{ar:'كتم الإشعارات',en:'Mute notifications'},disappearing:{ar:'الرسائل المؤقتة',en:'Disappearing messages'},
  chatTheme:{ar:'سمة المحادثة',en:'Chat theme'},mediaLinksDocs:{ar:'الوسائط والروابط والمستندات',en:'Media, links, and docs'},
  clearChat:{ar:'مسح المحادثة',en:'Clear chat'},exportChat:{ar:'تصدير المحادثة',en:'Export chat'},addShortcut:{ar:'إضافة اختصار',en:'Add shortcut'},
  contactInfo:{ar:'معلومات جهة الاتصال المحلية ستظهر هنا.',en:"The local contact's info will show here."},
  reportedMsg:{ar:'تم إرسال البلاغ لفريق ES.',en:'Your report was sent to the ES team.'},
  blockedMsg:{ar:'تم حظر جهة الاتصال.',en:'Contact blocked.'},
  mutedMsg:{ar:'تم كتم إشعارات هذه المحادثة.',en:"This chat's notifications are muted."},
  disappearingInfo:{ar:'الرسائل الجديدة تختفي تلقائيًا بعد مدة تحددها.',en:'New messages disappear automatically after a time you choose.'},
  chatThemeInfo:{ar:'اختر خلفية مخصصة لهذه المحادثة — قريبًا في هذا النموذج.',en:'Pick a custom wallpaper for this chat — coming soon.'},
  mediaInfo:{ar:'كل الصور والفيديوهات والملفات المُرسلة في هذه المحادثة تظهر هنا.',en:'All photos, videos and files shared in this chat show up here.'},
  exportInfo:{ar:'سيتم تنزيل نسخة نصية من هذه المحادثة.',en:'A text copy of this chat will be downloaded.'},
  shortcutInfo:{ar:'تمت إضافة اختصار لهذه المحادثة على الشاشة الرئيسية.',en:"A shortcut for this chat was added to your home screen."},
  chatCleared:{ar:'تم مسح رسائل هذه المحادثة.',en:"This chat's messages were cleared."},
  online:{ar:'متصل الآن',en:'Online'},typeMessage:{ar:'اكتب رسالة',en:'Type a message'},

  // full contact-info page (matches the real WhatsApp contact screen)
  videoCallLabel:{ar:'فيديو',en:'Video'},callInfo:{ar:'الاتصال الحقيقي يحتاج خط اتصال فعّال — قريبًا في هذا النموذج.',en:'A real call needs an active line — coming soon in this prototype.'},
  encryption:{ar:'التشفير',en:'Encryption'},encryptionInfo:{ar:'الرسائل والمكالمات في هذه المحادثة مشفّرة من طرف إلى طرف. اضغط للتحقق.',en:'Messages and calls here are end-to-end encrypted. Tap to verify.'},
  mediaVisibility:{ar:'رؤية الوسائط',en:'Media visibility'},
  advancedPrivacy:{ar:'خصوصية الدردشة المتقدمة',en:'Advanced chat privacy'},
  advancedPrivacySub:{ar:'عند التفعيل يمنع حفظ أو إعادة مشاركة محتوى هذه المحادثة خارج التطبيق',en:"When on, this restricts saving or resharing this chat's content outside the app"},
  translateMessages:{ar:'ترجمة الرسائل',en:'Translate messages'},
  noGroupsCommon:{ar:'لا توجد مجموعات مشتركة',en:'No groups in common'},
  createGroupWith:{ar:'إنشاء مجموعة مع',en:'Create group with'},
  addToGroups:{ar:'إضافة إلى مجموعات',en:'Add to groups'},addToGroupsSub:{ar:"أضف جهة الاتصال إلى المجموعات التي تنتمي إليها.",en:"Add this contact to groups you're in."},
  addToList:{ar:'إضافة إلى قائمة',en:'Add to list'},
  starredMessages:{ar:'الرسائل المميزة',en:'Starred messages'},
  customNotif:{ar:'نغمة وإشعارات مخصصة',en:'Custom tone and notifications'},
  off:{ar:'إيقاف',en:'Off'},

  // auth / login flow
  authPhoneTitle:{ar:'أدخل رقم هاتفك',en:'Enter your phone number'},
  authPhoneSub:{ar:'سيرسل ES App رمز تحقق لرقمك. اختر الدولة ثم أدخل رقمك.',en:'ES App will send a verification code to your number. Choose your country then enter your number.'},
  chooseCountry:{ar:'اختر الدولة',en:'Choose a country'},
  searchCountry:{ar:'ابحث عن الدولة',en:'Search country'},
  phoneNumberPh:{ar:'رقم الهاتف',en:'Phone number'},
  phoneInvalid:{ar:'أدخل رقم هاتف صحيح',en:'Enter a valid phone number'},
  authCodeTitle:{ar:'التحقق من رقمك',en:'Verify your number'},
  authCodeSub:{ar:'تم إرسال رمز مكوّن من 6 أرقام إلى',en:'A 6-digit code was sent to'},
  editNumber:{ar:'تعديل الرقم',en:'Edit number'},
  devOtpHint:{ar:'سيتم إرسال رمز SMS من Firebase للتحقق من ملكية رقم الهاتف.',en:'Firebase will send an SMS verification code to confirm ownership of your phone number.'},
  resend:{ar:'إعادة إرسال الرمز',en:'Resend code'},
  codeInvalid:{ar:'الرمز غير صحيح أو منتهي الصلاحية',en:'Invalid or expired code'},
  verifying:{ar:'جارٍ التحقق…',en:'Verifying…'},
  authProfileTitle:{ar:'ملفك الشخصي',en:'Profile info'},
  authProfileSub:{ar:'أدخل اسمك وصورة اختيارية — تقدر تغيّرهم لاحقًا.',en:'Enter your name and an optional photo — you can change these later.'},
  authProfileNamePh:{ar:'اسمك',en:'Your name'},
  finish:{ar:'تم',en:'Done'},
  nameRequiredAuth:{ar:'اكتب اسمك للمتابعة',en:'Enter your name to continue'},
  networkError:{ar:'تعذّر الاتصال بالسيرفر. تأكد إن السيرفر شغّال.',en:"Couldn't reach the server. Make sure it's running."},
  logout:{ar:'تسجيل الخروج',en:'Log out'},
  logoutSub:{ar:'حذف بيانات الجلسة من هذا الجهاز',en:'Remove this session from this device'},
  logoutConfirmTitle:{ar:'تسجيل الخروج',en:'Log out'},
  logoutConfirmDesc:{ar:'هل تريد تسجيل الخروج؟ سيتم حذف بيانات الحساب المحلية على هذا الجهاز.',en:'Log out? This device\'s local account data will be removed.'},
  cancel:{ar:'إلغاء',en:'Cancel'},
};
let LANG=localStorage.getItem('es_lang')||'ar';
let appSettings=JSON.parse(localStorage.getItem('es_settings')||'null')||{lastSeen:true,readReceipts:true,chatLock:false,mediaVisibility:true,messageNotifications:true,groupNotifications:true,callTone:true,autoDownloadPhotos:true,autoDownloadVideos:false,autoDownloadAudio:true,highContrast:false,reduceMotion:false,backupOn:false};
function saveSettings(){localStorage.setItem('es_settings',JSON.stringify(appSettings));applySettings()}
function applySettings(){document.documentElement.classList.toggle('highContrast',!!appSettings.highContrast);document.documentElement.classList.toggle('reduceMotion',!!appSettings.reduceMotion)}
function prefRow(key,title,sub,iconName){return `<button class="listButton prefRow" onclick="togglePref('${key}',this)"><span class="listIcon">${icon(iconName||'settings')}</span><span><b>${title}</b><small>${sub||''}</small></span><span class="toggle ${appSettings[key]?'on':''}"><i></i></span></button>`}
function togglePref(key,el){appSettings[key]=!appSettings[key];saveSettings();if(el){const sw=el.querySelector('.toggle');if(sw)sw.classList.toggle('on',!!appSettings[key])}}

function t(k){return (STR[k]&&STR[k][LANG])||k}
function applyLangDom(){document.documentElement.setAttribute('lang',LANG);document.documentElement.setAttribute('dir',LANG==='ar'?'rtl':'ltr')}

/* ================= data ================= */
let chats=JSON.parse(localStorage.getItem('es_chats')||'null')||[
{name:'أحمد',text:'آخر رسالة في المحادثة',time:'10:42 م',unread:2,group:false,msg:['أهلًا بك في ES App','هذه محادثة محلية تعمل فعليًا.']},
{name:'فريق ES',text:'تم إرسال ملف جديد',time:'9:18 م',unread:5,group:true,msg:['تم تحديث المشروع.','سأرسل التفاصيل لاحقًا.']},
{name:'محمد',text:'حسنًا، نتكلم لاحقًا',time:'8:03 م',unread:0,group:false,msg:['تمام، نتكلم لاحقًا.']},
{name:'العائلة',text:'موعد التجمع غدًا',time:'7:45 م',unread:3,group:true,msg:['موعد التجمع غدًا الساعة السابعة.']},
{name:'سارة',text:'شكرًا لك',time:'6:20 م',unread:0,group:false,msg:['شكرًا لك.']}
];
let calls=JSON.parse(localStorage.getItem('es_calls')||'null')||[
{name:'أحمد',time:'اليوم 10:22 ص',dir:'out',video:false},
{name:'فريق ES',time:'أمس 2:47 م',dir:'out',video:false},
{name:'سارة',time:'أمس 1:57 م',dir:'in',video:false},
];
let profile=JSON.parse(localStorage.getItem('es_profile')||'null')||{name:'ES User',about:'',username:'',phone:'+20 10 00000000',links:''};
let page='chats',filter='all',openChat=null;
function save(){localStorage.setItem('es_chats',JSON.stringify(chats))}
function saveCalls(){localStorage.setItem('es_calls',JSON.stringify(calls))}
function saveProfile(){localStorage.setItem('es_profile',JSON.stringify(profile))}

/* ================= appbar / layout ================= */
function setAppbar(title,{tabs='',showBack=false}={}){
  $('pageTitle').textContent=title;
  $('abTabs').innerHTML=tabs;
  $('abBack').classList.toggle('hidden',!showBack);
  $('abActions').classList.toggle('hidden',showBack);
}
function layout(content, mode='page'){
  document.body.classList.toggle('conversationMode',mode==='conversation');
  $('appbar').classList.toggle('hidden',mode==='conversation');
  $('screen').innerHTML = mode==='conversation' ? content : `<div class="screen">${content}</div>`;
  updateNav();
}
function updateNav(){document.querySelectorAll('.bottom button').forEach(b=>b.classList.toggle('active',b.dataset.page===page))}
function go(p){page=p;openChat=null;
  if(p==='chats')renderChats();
  if(p==='updates')renderUpdates();
  if(p==='communities')renderCommunities();
  if(p==='calls')renderCalls();
}
function goBack(){
  if(page==='contactInfo'){backFromContactInfo();return}
  page==='settings'||page==='search'||page==='newCommunity'||page==='communityIntro' ? go('chats') : renderChats();
}
function backFromContactInfo(){
  if(ciFrom==='conversation'&&openChat!==null){openConversation(openChat);return}
  go(ciFrom||'chats');
}
function appBack(){
  if($('modal').innerHTML.trim()){closeModal();return true}
  if(page==='authCode'){renderAuthPhone();return true}
  if(page==='authProfile'){return true}
  if(page==='authPhone'){return false}
  if(page==='contactInfo'){backFromContactInfo();return true}
  if(document.body.classList.contains('conversationMode')){renderChats();return true}
  if(page==='settings'||page==='search'||page==='newCommunity'||page==='communityIntro'){go('chats');return true}
  return false;
}
function relabelNav(){
  document.querySelector('[data-page="chats"] span').textContent=t('chats');
  document.querySelector('[data-page="updates"] span').textContent=t('updates');
  document.querySelector('[data-page="communities"] span').textContent=t('communities');
  document.querySelector('[data-page="calls"] span').textContent=t('calls');
}

/* ================= chats ================= */
function renderChats(search=''){
  document.body.classList.remove('conversationMode');
  page='chats';
  let list=chats.filter(c=>filter==='all'||(filter==='unread'&&c.unread>0)||(filter==='groups'&&c.group));
  if(search)list=list.filter(c=>(c.name+' '+c.text).includes(search));
  const tabs=`<button class="${filter==='all'?'active':''}" onclick="setFilter('all')">${t('all')}</button><button class="${filter==='unread'?'active':''}" onclick="setFilter('unread')">${t('unread')}</button><button class="${filter==='groups'?'active':''}" onclick="setFilter('groups')">${t('groups')}</button>`;
  setAppbar(t('chats'),{tabs});
  layout(`<div class="list">${list.map(c=>chatRow(c)).join('')||`<div class="empty"><b>${t('noChats')}</b>${t('startChat')}</div>`}</div><button class="fab" onclick="newChat()">${icon('chat')}</button>`);
  relabelNav();
}
function chatRow(c){const i=chats.indexOf(c);return `<button class="chat" onclick="openConversation(${i})" oncontextmenu="event.preventDefault();chatContextMenu(${i});return false" ontouchstart="chatLongPressStart(${i})" ontouchend="chatLongPressEnd()" ontouchmove="chatLongPressEnd()"><div class="avatar">${esc(c.name[0])}</div><div class="chatMain"><div class="row"><div class="name">${esc(c.name)}</div><div class="time">${esc(c.time)}</div></div><div class="row"><div class="preview">${esc(c.text)}</div>${c.unread?`<span class="unread">${c.unread}</span>`:''}</div></div></button>`}
function setFilter(f){filter=f;renderChats()}

let lpTimer=null;
function chatLongPressStart(i){lpTimer=setTimeout(()=>{chatContextMenu(i)},450)}
function chatLongPressEnd(){if(lpTimer){clearTimeout(lpTimer);lpTimer=null}}
function chatContextMenu(i){const c=chats[i];showModal(`<div class="sheet">
<div class="sheetHead">${esc(c.name)}</div>
<button onclick="closeModal();contactInfo(${i})">${icon('user')}<span>${t('viewContact')}</span></button>
<button onclick="closeModal();openSearch()">${icon('search')}<span>${t('search')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('report'),t('reportedMsg')))">${icon('flag')}<span>${t('report')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('block'),t('blockedMsg')))">${icon('lock')}<span>${t('block')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('muteNotif'),t('mutedMsg')))">${icon('bell')}<span>${t('muteNotif')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('disappearing'),t('disappearingInfo')))">${icon('access')}<span>${t('disappearing')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('chatTheme'),t('chatThemeInfo')))">${icon('settings')}<span>${t('chatTheme')}</span></button>
</div>`)}

function openSearch(){
  page='search';
  setAppbar(t('search'),{showBack:true});
  layout(`<div class="searchBox"><input id="q" placeholder="${t('searchHint')}" oninput="renderSearch(this.value)"></div><div id="results"></div>`);
}
function renderSearch(v){const list=chats.filter(c=>(c.name+' '+c.text).includes(v.trim()));$('results').innerHTML=`<div class="list">${list.map(c=>chatRow(c)).join('')||`<div class="empty">${t('noResults')}</div>`}</div>`}

function openMenu(){showModal(`<div class="sheet">
<button onclick="closeModal();createChat(t('newChat'))">${icon('chat')}<span>${t('newChat')}</span></button>
<button onclick="closeModal();createChat(t('esGroup'),true)">${icon('community')}<span>${t('newGroup')}</span></button>
<button onclick="closeModal();markAllRead()">${icon('check')}<span>${t('markAllRead')}</span></button>
<button onclick="closeModal();renderSettings()">${icon('settings')}<span>${t('settings')}</span></button>
<button onclick="closeModal();showAbout()">${icon('user')}<span>${t('about')}</span></button>
<button onclick="closeModal();resetData()">${icon('lock')}<span>${t('resetDemo')}</span></button>
</div>`)}
function markAllRead(){chats.forEach(c=>c.unread=0);save();renderChats()}

/* ================= settings ================= */
function renderSettings(){
  page='settings';
  document.body.classList.remove('conversationMode');
  setAppbar(t('settings'),{showBack:true});
  layout(`
  <button class="settingsProfile" onclick="editProfile()"><div class="avatar" ${selfAvatarStyle()}>${selfAvatarInner()}</div><div class="who"><b>${esc(profile.name)}</b><small>${esc(profile.about)||t('localProfile')}</small></div></button>
  <div class="groupLabel">${t('account')}</div>
  <div>
    <button class="listButton" onclick="subscriptionsSettings()"><span class="listIcon">${icon('star')}</span><span><b>${t('subscriptions')}</b><small>${t('subscriptionsSub')}</small></span></button>
    <button class="listButton" onclick="devicesSettings()"><span class="listIcon">${icon('devices')}</span><span><b>${t('devices')}</b><small>${t('devicesSub')}</small></span></button>
    <button class="listButton" onclick="editProfile()"><span class="listIcon">${icon('user')}</span><span><b>${t('accountRow')}</b><small>${t('accountSub')}</small></span></button>
    <button class="listButton" onclick="privacySettings()"><span class="listIcon">${icon('lock')}</span><span><b>${t('privacy')}</b><small>${t('privacySub')}</small></span></button>
    <button class="listButton" onclick="listsSettings()"><span class="listIcon">${icon('list')}</span><span><b>${t('lists')}</b><small>${t('listsSub')}</small></span></button>
  </div>
  <div class="groupLabel">${t('preferences')}</div>
  <div>
    <button class="listButton" onclick="chatsSettings()"><span class="listIcon">${icon('chat')}</span><span><b>${t('chatsRow')}</b><small>${t('chatsSub')}</small></span></button>
    <button class="listButton" onclick="themeSettings()"><span class="listIcon">${icon('settings')}</span><span><b>${t('appearance')}</b><small>${t('appearanceSub')}</small></span></button>
    <button class="listButton" onclick="broadcastsSettings()"><span class="listIcon">${icon('broadcast')}</span><span><b>${t('broadcasts')}</b><small>${t('broadcastsSub')}</small></span></button>
    <button class="listButton" onclick="notificationsSettings()"><span class="listIcon">${icon('bell')}</span><span><b>${t('notifications')}</b><small>${t('notificationsSub')}</small></span></button>
    <button class="listButton" onclick="storageSettings()"><span class="listIcon">${icon('storage')}</span><span><b>${t('storage')}</b><small>${t('storageSub')}</small></span></button>
    <button class="listButton" onclick="parentalSettings()"><span class="listIcon">${icon('shield')}</span><span><b>${t('parental')}</b><small>${t('parentalSub')}</small></span></button>
    <button class="listButton" onclick="accessibilitySettings()"><span class="listIcon">${icon('access')}</span><span><b>${t('accessibility')}</b><small>${t('accessibilitySub')}</small></span></button>
    <button class="listButton" onclick="languageSettings()"><span class="listIcon">${icon('globe')}</span><span><b>${t('language')}</b><small>${LANG==='ar'?t('arabic'):t('english')} ${t('langHint')}</small></span></button>
  </div>
  <div class="groupLabel">${t('support')}</div>
  <div>
    <button class="listButton" onclick="helpSettings()"><span class="listIcon">${icon('help')}</span><span><b>${t('help')}</b><small>${t('helpSub')}</small></span></button>
    <button class="listButton" onclick="inviteFriend()"><span class="listIcon">${icon('invite')}</span><span><b>${t('invite')}</b><small>${t('inviteSub')}</small></span></button>
    <button class="listButton" onclick="appUpdatesSettings()"><span class="listIcon">${icon('appupdate')}</span><span><b>${t('appUpdates')}</b><small>${t('appUpdatesSub')}</small></span></button>
    <button class="listButton" onclick="showAbout()"><span class="listIcon">${icon('user')}</span><span><b>${t('about')}</b><small>${t('aboutSub')}</small></span></button>
    <button class="listButton" onclick="logout()"><span class="listIcon danger">${icon('block')}</span><span><b class="dangerText">${t('logout')}</b><small>${t('logoutSub')}</small></span></button>
  </div>`);
}

/* Profile screen: matches the real app layout (avatar+camera, Name, About,
   Reserved username with key badge, Phone, Links). */
function editProfile(){
  showModal(`<div class="sheet profileEdit">
    <div class="peAvatarWrap"><div class="avatar big" ${selfAvatarStyle()}>${selfAvatarInner()}</div><button class="peCam" onclick="event.stopPropagation();pickAvatarFile()">${icon('camera')}</button></div>
    <input type="file" id="apFile" accept="image/*" class="hidden" onchange="onAvatarPickedEdit(event)">
    <label class="peField"><span>${t('name')}</span><input id="peName" value="${esc(profile.name)}" placeholder="${t('setName')}"></label>
    <label class="peField"><span>${t('aboutField')}</span><input id="peAbout" value="${esc(profile.about)}" placeholder="${t('setAbout')}"></label>
    <label class="peField"><span>${t('reservedUsername')}</span><input id="peUsername" value="${esc(profile.username)}" placeholder="${t('setUsername')}"></label>
    <div class="peBadge">${icon('key')}<span>${esc(profile.username)||'—'}</span></div>
    <div class="peStatic"><span class="listIcon">${icon('phone')}</span><span><b>${t('phone')}</b><small>${esc(profile.phone)}</small></span></div>
    <label class="peField"><span>${t('links')}</span><input id="peLinks" value="${esc(profile.links)}" placeholder="${t('addLinks')}"></label>
    <button class="peSave" onclick="saveProfileEdit()">${icon('check')}<span>${t('save')}</span></button>
  </div>`)
}
function onAvatarPickedEdit(e){
  const file=e.target.files&&e.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    if($('peName'))profile.name=$('peName').value.trim()||profile.name;
    if($('peAbout'))profile.about=$('peAbout').value.trim();
    if($('peUsername'))profile.username=$('peUsername').value.trim();
    profile.avatarUrl=reader.result;saveProfile();editProfile();
  };
  reader.readAsDataURL(file);
}
function saveProfileEdit(){
  profile.name=$('peName').value.trim()||profile.name;
  profile.about=$('peAbout').value.trim();
  profile.username=$('peUsername').value.trim();
  profile.links=$('peLinks').value.trim();
  saveProfile();closeModal();
  if(page==='settings')renderSettings();
}
function devicesSettings(){showModal(infoSheet(t('devices'),t('devicesInfo')))}
function subscriptionsSettings(){showModal(infoSheet(t('subscriptions'),t('subsInfo')))}
function listsSettings(){showModal(infoSheet(t('lists'),t('listsInfo')))}
function broadcastsSettings(){showModal(infoSheet(t('broadcasts'),t('broadcastsInfo')))}
function parentalSettings(){showModal(infoSheet(t('parental'),t('parentalInfo')))}
function accessibilitySettings(){showModal(`<div class="sheet">
<button class="listButton" onclick="toggle(this)"><span><b>${t('highContrast')}</b><small>${t('highContrastSub')}</small></span><span class="toggle"><i></i></span></button>
<button class="listButton" onclick="toggle(this)"><span><b>${t('reduceMotion')}</b><small>${t('reduceMotionSub')}</small></span><span class="toggle"><i></i></span></button>
</div>`)}
function appUpdatesSettings(){showModal(infoSheet(t('appUpdates'),t('updateInfo')))}
function themeSettings(){showModal(`<div class="sheet"><button onclick="closeModal()">${icon('settings')}<span>${t('appearance')}</span></button><div class="colors"><button class="color" style="background:#62e6a4" onclick="setAccent('#62e6a4')"></button><button class="color" style="background:#58a6ff" onclick="setAccent('#58a6ff')"></button><button class="color" style="background:#b68cff" onclick="setAccent('#b68cff')"></button><button class="color" style="background:#ff6f91" onclick="setAccent('#ff6f91')"></button></div></div>`)}
function setAccent(c){document.documentElement.style.setProperty('--green',c);localStorage.setItem('accent',c);closeModal()}
function privacySettings(){showModal(`<div class="sheet settingsSheet"><div class="sheetHead">${t('privacy')}</div>${prefRow('lastSeen',t('lastSeen'),t('lastSeenSub'),'user')}${prefRow('readReceipts',t('readReceipts'),t('readReceiptsSub'),'check')}${prefRow('chatLock',t('chatLock'),t('chatLockSub'),'lock')}</div>`)}
function chatsSettings(){showModal(`<div class="sheet settingsSheet"><div class="sheetHead">${t('chatsRow')}</div><button class="listButton" onclick="closeModal();showModal(infoSheet(t('backup'),t('backupSub')))"><span class="listIcon">${icon('storage')}</span><span><b>${t('backup')}</b><small>${t('backupSub')}</small></span></button>${prefRow('mediaVisibility',t('mediaVisibility'),t('mediaInfo'),'storage')}${prefRow('backupOn',t('backup'),'تفعيل النسخ الاحتياطي المحلي','storage')}</div>`)}
function notificationsSettings(){showModal(`<div class="sheet settingsSheet"><div class="sheetHead">${t('notifications')}</div>${prefRow('messageNotifications',t('msgNotif'),t('msgNotifSub'),'bell')}${prefRow('groupNotifications',t('groupNotif'),t('groupNotifSub'),'community')}${prefRow('callTone',t('callTone'),t('callToneSub'),'phone')}</div>`)}
function storageSettings(){showModal(`<div class="sheet settingsSheet"><div class="sheetHead">${t('storage')}</div>${prefRow('autoDownloadPhotos','التنزيل التلقائي للصور','تنزيل الصور تلقائيًا عند توفر البيانات','gallery')}${prefRow('autoDownloadVideos','التنزيل التلقائي للفيديو','تنزيل الفيديو تلقائيًا','video')}${prefRow('autoDownloadAudio','التنزيل التلقائي للصوت','تنزيل الرسائل الصوتية تلقائيًا','mic')}</div>`)}
function accessibilitySettings(){showModal(`<div class="sheet settingsSheet"><div class="sheetHead">${t('accessibility')}</div>${prefRow('highContrast',t('highContrast'),t('highContrastSub'),'access')}${prefRow('reduceMotion',t('reduceMotion'),t('reduceMotionSub'),'access')}</div>`)}
function languageSettings(){showModal(`<div class="sheet settingsSheet"><div class="sheetHead">${t('language')}</div><button class="listButton" onclick="LANG='ar';localStorage.setItem('es_lang','ar');applyLangDom();closeModal();renderSettings()"><span class="listIcon">${icon('globe')}</span><span><b>${t('arabic')}</b><small>${t('langHint')}</small></span></button><button class="listButton" onclick="LANG='en';localStorage.setItem('es_lang','en');applyLangDom();closeModal();renderSettings()"><span class="listIcon">${icon('globe')}</span><span><b>${t('english')}</b></span></button></div>`)}
function themeSettings(){showModal(`<div class="sheet settingsSheet"><div class="sheetHead">${t('appearance')}</div><button class="listButton" onclick="setAccent('#62e6a4')"><span class="listIcon">${icon('settings')}</span><span><b>أخضر ES</b><small>لون التطبيق الأساسي</small></span></button><button class="listButton" onclick="setAccent('#58a6ff')"><span class="listIcon">${icon('settings')}</span><span><b>أزرق</b><small>لون التطبيق</small></span></button><button class="listButton" onclick="setAccent('#b68cff')"><span class="listIcon">${icon('settings')}</span><span><b>بنفسجي</b><small>لون التطبيق</small></span></button></div>`)}
function setAccent(c){document.documentElement.style.setProperty('--green',c);localStorage.setItem('accent',c);closeModal()}
function helpSettings(){showModal(infoSheet(t('help'),t('helpInfo')))}
function inviteFriend(){showModal(infoSheet(t('invite'),t('inviteInfo')))}
function infoSheet(title,desc){return `<div class="sheet"><div style="padding:15px"><b style="display:block;font-size:15px;margin-bottom:8px">${esc(title)}</b><p style="margin:0;color:var(--muted);font-size:12.5px;line-height:1.7">${esc(desc)}</p></div><button onclick="closeModal()">${icon('check')}<span>${t('ok')}</span></button></div>`}
function toggle(el){el.querySelector('.toggle').classList.toggle('on')}

/* ================= conversation ================= */
function openConversation(i){
  openChat=i;const c=chats[i];c.unread=0;save();
  layout(`<div class="conversation">
    <div class="chatHead"><button class="back" onclick="renderChats()">${icon('back')}</button><div class="avatar">${esc(c.name[0])}</div><div class="chHeadName"><div class="name">${esc(c.name)}</div><small>${t('online')}</small></div><button class="chHeadMore" onclick="chatHeaderMenu(${i})">${icon('more')}</button></div>
    <div class="messages" id="messages">${(c.msg||[]).map((m,j)=>`<div class="bubble ${j%2?'me':''}">${esc(m)}</div>`).join('')}</div>
    <div class="composer"><input id="message" placeholder="${t('typeMessage')}" onkeydown="if(event.key==='Enter')sendMessage()"><button onclick="sendMessage()">${icon('send')}</button></div>
  </div>`, 'conversation');
  $('messages').scrollTop=$('messages').scrollHeight;
}
function chatHeaderMenu(i){showModal(`<div class="sheet">
<button onclick="closeModal();contactInfo(${i})">${icon('user')}<span>${t('viewContact')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('mediaLinksDocs'),t('mediaInfo')))">${icon('storage')}<span>${t('mediaLinksDocs')}</span></button>
<button onclick="closeModal();clearThisChat(${i})">${icon('lock')}<span>${t('clearChat')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('exportChat'),t('exportInfo')))">${icon('appupdate')}<span>${t('exportChat')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('addShortcut'),t('shortcutInfo')))">${icon('star')}<span>${t('addShortcut')}</span></button>
</div>`)}
function clearThisChat(i){chats[i].msg=[];chats[i].text='';save();showModal(infoSheet(t('clearChat'),t('chatCleared')));if(openChat===i)openConversation(i)}

/* ================= full contact info page (matches real WhatsApp contact screen) ================= */
let ciFrom=null;
function contactInfo(i){
  ciFrom=openChat!==null?'conversation':page;
  const c=chats[i];
  page='contactInfo';document.body.classList.remove('conversationMode');
  setAppbar(t('viewContact'),{showBack:true});
  layout(`
  <div class="ciHead">
    <div class="avatar big ciAvatar">${esc(c.name[0])}</div>
    <h2>${esc(c.name)}</h2>
    <div class="ciPhone">${esc(profile.phone)}</div>
  </div>
  <div class="ciActions">
    <button onclick="showModal(infoSheet(t('call'),t('callInfo')))"><span class="callTopIcon">${icon('phone')}</span><span>${t('call')}</span></button>
    <button onclick="showModal(infoSheet(t('videoCallLabel'),t('callInfo')))"><span class="callTopIcon">${icon('video')}</span><span>${t('videoCallLabel')}</span></button>
    <button onclick="openSearch()"><span class="callTopIcon">${icon('search')}</span><span>${t('search')}</span></button>
  </div>
  <div class="card ciCard">
    <button class="listButton" onclick="showModal(infoSheet(t('mediaLinksDocs'),t('mediaInfo')))"><span class="listIcon">${icon('storage')}</span><span><b>${t('mediaLinksDocs')}</b></span></button>
    <button class="listButton" onclick="showModal(infoSheet(t('starredMessages'),t('starredInfo')))"><span class="listIcon">${icon('star')}</span><span><b>${t('starredMessages')}</b></span></button>
  </div>
  <div class="card ciCard">
    <button class="listButton" onclick="toggle(this)"><span class="listIcon">${icon('bell')}</span><span><b>${t('muteNotif')}</b><small>${t('customNotif')}</small></span><span class="toggle"><i></i></span></button>
    <button class="listButton" onclick="showModal(infoSheet(t('disappearing'),t('disappearingInfo')))"><span class="listIcon">${icon('access')}</span><span><b>${t('disappearing')}</b><small>${t('off')}</small></span></button>
    <button class="listButton" onclick="showModal(infoSheet(t('chatTheme'),t('chatThemeInfo')))"><span class="listIcon">${icon('settings')}</span><span><b>${t('chatTheme')}</b></span></button>
  </div>
  <div class="card ciCard">
    <button class="listButton" onclick="showModal(infoSheet(t('encryption'),t('encryptionInfo')))"><span class="listIcon">${icon('lock')}</span><span><b>${t('encryption')}</b><small>${t('encryptionInfo')}</small></span></button>
    <button class="listButton" onclick="toggle(this)"><span class="listIcon">${icon('storage')}</span><span><b>${t('mediaVisibility')}</b></span><span class="toggle on"><i></i></span></button>
    <button class="listButton" onclick="toggle(this)"><span class="listIcon">${icon('lock')}</span><span><b>${t('chatLock')}</b><small>${t('chatLockSub')}</small></span><span class="toggle"><i></i></span></button>
    <button class="listButton" onclick="toggle(this)"><span class="listIcon">${icon('shield')}</span><span><b>${t('advancedPrivacy')}</b><small>${t('advancedPrivacySub')}</small></span><span class="toggle"><i></i></span></button>
    <button class="listButton" onclick="toggle(this)"><span class="listIcon">${icon('globe')}</span><span><b>${t('translateMessages')}</b></span><span class="toggle"><i></i></span></button>
  </div>
  <div class="groupLabel">${t('noGroupsCommon')}</div>
  <div class="card ciCard">
    <button class="listButton" onclick="closeModal();createChat(t('esGroup'),true)"><span class="listIcon green">${icon('community')}</span><span><b>${t('createGroupWith')} ${esc(c.name)}</b></span></button>
    <button class="listButton" onclick="showModal(infoSheet(t('addToGroups'),t('addToGroupsSub')))"><span class="listIcon green">${icon('community')}</span><span><b>${t('addToGroups')}</b><small>${t('addToGroupsSub')}</small></span></button>
    <button class="listButton" onclick="showModal(infoSheet(t('addToList'),t('listsInfo')))"><span class="listIcon">${icon('list')}</span><span><b>${t('addToList')}</b></span></button>
  </div>
  <div class="card ciCard">
    <button class="listButton" onclick="showModal(infoSheet(t('block'),t('blockedMsg')))"><span class="listIcon danger">${icon('block')}</span><span><b class="dangerText">${t('block')} ${esc(c.name)}</b></span></button>
    <button class="listButton" onclick="showModal(infoSheet(t('report'),t('reportedMsg')))"><span class="listIcon danger">${icon('flag')}</span><span><b class="dangerText">${t('report')} ${esc(c.name)}</b></span></button>
  </div>
  `);
}
function sendMessage(){const inp=$('message');if(!inp||!inp.value.trim())return;const c=chats[openChat];c.msg=c.msg||[];c.msg.push(inp.value.trim());c.text=inp.value.trim();c.time=t('now');save();openConversation(openChat)}
function newChat(){showModal(`<div class="sheet"><button onclick="closeModal();createChat(t('newChat'))">${icon('chat')}<span>${t('createChatBtn')}</span></button><button onclick="closeModal();createChat(t('esGroup'),true)">${icon('community')}<span>${t('createGroupBtn')}</span></button></div>`)}
function createChat(name,isGroup){chats.unshift({name,text:t('startNow'),time:t('now'),unread:0,group:!!isGroup,msg:[]});save();closeModal();renderChats()}

/* ================= updates ================= */
function renderUpdates(){
  page='updates';document.body.classList.remove('conversationMode');
  setAppbar(t('updates'));
  layout(`<div class="hero"><h2>${t('updates')}</h2><p>${t('updatesHero')}</p></div><div class="card"><button class="listButton" onclick="showModal(infoSheet(t('addStatus'),t('addStatusSub')))"><span class="listIcon">+</span><span><b>${t('addStatus')}</b><small>${t('addStatusSub')}</small></span></button></div>`);
  relabelNav();
}
function updatesMenu(){showModal(`<div class="sheet">
<button onclick="closeModal();showModal(infoSheet(t('createChannel'),t('createChannelInfo')))">${icon('broadcast')}<span>${t('createChannel')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('statusPrivacy'),t('statusPrivacyInfo')))">${icon('lock')}<span>${t('statusPrivacy')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('starred'),t('starredInfo')))">${icon('star')}<span>${t('starred')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('adPrefs'),t('adPrefsInfo')))">${icon('list')}<span>${t('adPrefs')}</span></button>
<button onclick="closeModal();renderSettings()">${icon('settings')}<span>${t('settings')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('switchAccount'),t('switchAccountInfo')))">${icon('user')}<span>${t('switchAccount')}</span></button>
</div>`)}

/* ================= communities ================= */
function renderCommunities(){
  page='communities';document.body.classList.remove('conversationMode');
  setAppbar(t('communities'));
  layout(`<div class="hero"><h2>${t('communities')}</h2><p>${t('communitiesHero')}</p></div><div class="card"><button class="listButton" onclick="communityIntro()"><span class="listIcon">${icon('community')}</span><span><b>${t('createCommunity')}</b><small>${t('createCommunity')}</small></span></button></div>`);
  relabelNav();
}
function communityIntro(){
  page='communityIntro';document.body.classList.remove('conversationMode');
  setAppbar(t('communities'),{showBack:true});
  layout(`<div class="communityIntro">
    <div class="ciArt">${icon('community')}</div>
    <h2>${t('communityIntroTitle')}</h2>
    <p>${t('communityIntroDesc')}</p>
    <a class="ciLink">${t('seeExamples')} ${icon('next')}</a>
  </div>
  <button class="ciCta" onclick="newCommunityForm()">${t('getStarted')}</button>`);
}
function newCommunityForm(){
  page='newCommunity';document.body.classList.remove('conversationMode');
  setAppbar(t('newCommunity'),{showBack:true});
  layout(`<div class="ncForm">
    <div class="ncPhoto"><div class="ncPhotoIcon">${icon('community')}</div><button class="ncCam" onclick="event.stopPropagation()">${icon('camera')}</button></div>
    <div class="ncPhotoLabel">${t('changePhoto')}</div>
    <label class="peField big"><span>${t('communityName')}</span><input id="ncName" maxlength="100" placeholder="${t('communityName')}"></label>
    <textarea id="ncDesc" class="ncDesc" maxlength="2048">${t('communityWelcome')}</textarea>
  </div>
  <button class="ncNext" onclick="createCommunity()">${icon('next')}</button>`);
}
function createCommunity(){
  const name=($('ncName').value||'').trim();
  if(!name){showModal(infoSheet(t('newCommunity'),t('nameRequired')));return}
  showModal(infoSheet(name,t('communityCreated')));
  go('communities');
}

/* ================= calls ================= */
function renderCalls(){
  page='calls';document.body.classList.remove('conversationMode');
  setAppbar(t('calls'));
  layout(`
  <div class="callTop">
    <button onclick="showModal(newCallSheet())"><span class="callTopIcon">${icon('phone')}</span>${t('call')}</button>
    <button onclick="showModal(infoSheet(t('schedule'),t('scheduleInfo')))"><span class="callTopIcon">${icon('calendar')}</span>${t('schedule')}</button>
    <button onclick="showModal(infoSheet(t('keypad'),t('keypadInfo')))"><span class="callTopIcon">${icon('keypad')}</span>${t('keypad')}</button>
    <button onclick="showModal(infoSheet(t('favorites'),t('favoritesInfo')))"><span class="callTopIcon">${icon('heart')}</span>${t('favorites')}</button>
  </div>
  <div class="groupLabel">${t('recent')}</div>
  <div class="list">${calls.map((c,i)=>callRow(c,i)).join('')||`<div class="empty">${t('noCalls')}</div>`}</div>
  <p class="callFoot">🔒 ${t('encryptedCalls')} <b>${t('encryptedCallsBold')}</b></p>
  <button class="fab" onclick="showModal(newCallSheet())">${icon('phone')}</button>`);
  relabelNav();
}
function callRow(c,i){return `<div class="chat callRow"><div class="avatar">${esc(c.name[0])}</div><div class="chatMain"><div class="row"><div class="name">${esc(c.name)}</div></div><div class="row"><div class="preview">${c.dir==='out'?'↗':'↙'} ${c.dir==='out'?t('outgoing'):t('incoming')} · ${esc(c.time)}</div></div></div><button class="callBtn" onclick="event.stopPropagation();redial(${i})">${icon('phone')}</button></div>`}
function redial(i){calls[i].time=t('now');calls[i].dir='out';saveCalls();renderCalls()}
function newCallSheet(){return `<div class="sheet"><div class="sheetHead">${t('newCall')}</div>${chats.map((c,i)=>`<button onclick="closeModal();placeCall('${esc(c.name)}')">${icon('phone')}<span>${esc(c.name)}</span></button>`).join('')||`<div style="padding:15px;color:var(--muted)">${t('chooseContact')}</div>`}</div>`}
function placeCall(name){calls.unshift({name,time:t('now'),dir:'out',video:false});saveCalls();renderCalls()}
function callsMenu(){showModal(`<div class="sheet">
<button onclick="closeModal();clearCallLog()">${icon('lock')}<span>${t('clearCallLog')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('scheduledCalls'),t('scheduledCallsInfo')))">${icon('calendar')}<span>${t('scheduledCalls')}</span></button>
<button onclick="closeModal();renderSettings()">${icon('settings')}<span>${t('settings')}</span></button>
<button onclick="closeModal();showModal(infoSheet(t('switchAccount'),t('switchAccountInfo')))">${icon('user')}<span>${t('switchAccount')}</span></button>
</div>`)}
function clearCallLog(){calls=[];saveCalls();showModal(infoSheet(t('clearCallLog'),t('callLogCleared')));renderCalls()}

/* ================= misc ================= */
function showAbout(){showModal(`<div class="sheet profile"><div class="logo" style="margin:auto;width:64px;height:64px;border-radius:20px;display:grid;place-items:center;background:linear-gradient(145deg,#72efb1,#15975a);color:#06140c;font-weight:900">ES</div><h2>ES App</h2><p>${LANG==='ar'?'واجهة مراسلة WebView بتصميم Glass حديث.':'A WebView messaging UI with a modern Glass design.'}</p><button onclick="closeModal()">${t('close')}</button></div>`)}
function showModal(html){$('modal').innerHTML=`<div class="modal" onclick="if(event.target===this)closeModal()">${html}</div>`}
function closeModal(){$('modal').innerHTML=''}
function resetData(){localStorage.removeItem('es_chats');localStorage.removeItem('es_calls');localStorage.removeItem('es_profile');localStorage.removeItem('accent');location.reload()}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}

/* Header "more" button: routes to the right menu for whichever page is open. */
function openMenuHeader(){
  if(page==='updates')return updatesMenu();
  if(page==='calls')return callsMenu();
  openMenu();
}

/* ================= auth / login (phone + OTP + profile, like WhatsApp) ================= */
// Your OptikLink server address. Update the port/IP here if they ever change.
const API_BASE='http://132.243.253.240:5436';

const COUNTRIES=[
{c:'EG',n:'مصر',d:'+20',f:'🇪🇬'},{c:'SA',n:'السعودية',d:'+966',f:'🇸🇦'},{c:'AE',n:'الإمارات',d:'+971',f:'🇦🇪'},
{c:'KW',n:'الكويت',d:'+965',f:'🇰🇼'},{c:'QA',n:'قطر',d:'+974',f:'🇶🇦'},{c:'BH',n:'البحرين',d:'+973',f:'🇧🇭'},
{c:'OM',n:'عُمان',d:'+968',f:'🇴🇲'},{c:'JO',n:'الأردن',d:'+962',f:'🇯🇴'},{c:'LB',n:'لبنان',d:'+961',f:'🇱🇧'},
{c:'SY',n:'سوريا',d:'+963',f:'🇸🇾'},{c:'IQ',n:'العراق',d:'+964',f:'🇮🇶'},{c:'YE',n:'اليمن',d:'+967',f:'🇾🇪'},
{c:'LY',n:'ليبيا',d:'+218',f:'🇱🇾'},{c:'TN',n:'تونس',d:'+216',f:'🇹🇳'},{c:'DZ',n:'الجزائر',d:'+213',f:'🇩🇿'},
{c:'MA',n:'المغرب',d:'+212',f:'🇲🇦'},{c:'SD',n:'السودان',d:'+249',f:'🇸🇩'},{c:'PS',n:'فلسطين',d:'+970',f:'🇵🇸'},
{c:'SO',n:'الصومال',d:'+252',f:'🇸🇴'},{c:'KM',n:'جزر القمر',d:'+269',f:'🇰🇲'},{c:'DJ',n:'جيبوتي',d:'+253',f:'🇩🇯'},
{c:'MR',n:'موريتانيا',d:'+222',f:'🇲🇷'},{c:'TR',n:'تركيا',d:'+90',f:'🇹🇷'},{c:'IR',n:'إيران',d:'+98',f:'🇮🇷'},
{c:'PK',n:'باكستان',d:'+92',f:'🇵🇰'},{c:'IN',n:'الهند',d:'+91',f:'🇮🇳'},{c:'BD',n:'بنغلاديش',d:'+880',f:'🇧🇩'},
{c:'ID',n:'إندونيسيا',d:'+62',f:'🇮🇩'},{c:'MY',n:'ماليزيا',d:'+60',f:'🇲🇾'},{c:'US',n:'الولايات المتحدة',d:'+1',f:'🇺🇸'},
{c:'CA',n:'كندا',d:'+1',f:'🇨🇦'},{c:'GB',n:'المملكة المتحدة',d:'+44',f:'🇬🇧'},{c:'DE',n:'ألمانيا',d:'+49',f:'🇩🇪'},
{c:'FR',n:'فرنسا',d:'+33',f:'🇫🇷'},{c:'IT',n:'إيطاليا',d:'+39',f:'🇮🇹'},{c:'ES',n:'إسبانيا',d:'+34',f:'🇪🇸'},
{c:'RU',n:'روسيا',d:'+7',f:'🇷🇺'},{c:'CN',n:'الصين',d:'+86',f:'🇨🇳'},{c:'JP',n:'اليابان',d:'+81',f:'🇯🇵'},
{c:'KR',n:'كوريا الجنوبية',d:'+82',f:'🇰🇷'},{c:'BR',n:'البرازيل',d:'+55',f:'🇧🇷'},{c:'NG',n:'نيجيريا',d:'+234',f:'🇳🇬'},
{c:'ZA',n:'جنوب أفريقيا',d:'+27',f:'🇿🇦'},{c:'KE',n:'كينيا',d:'+254',f:'🇰🇪'},{c:'ET',n:'إثيوبيا',d:'+251',f:'🇪🇹'},
{c:'AU',n:'أستراليا',d:'+61',f:'🇦🇺'},{c:'NL',n:'هولندا',d:'+31',f:'🇳🇱'},{c:'SE',n:'السويد',d:'+46',f:'🇸🇪'},
{c:'CH',n:'سويسرا',d:'+41',f:'🇨🇭'},{c:'GR',n:'اليونان',d:'+30',f:'🇬🇷'},{c:'PL',n:'بولندا',d:'+48',f:'🇵🇱'},
{c:'UA',n:'أوكرانيا',d:'+380',f:'🇺🇦'},{c:'PH',n:'الفلبين',d:'+63',f:'🇵🇭'}
];

let auth=JSON.parse(localStorage.getItem('es_auth')||'null'); // {accessToken, refreshToken}
let loggedIn=localStorage.getItem('es_loggedin')==='1';
let authCountry=COUNTRIES[0], authDigits='', authFullPhone='', authOtp='', authResendAt=0, authNewAccount=false, authBusy=false;

function api(path,opts={}){
  // IMPORTANT: build headers first, then spread opts around it — never
  // spread opts.headers directly after a fixed headers object, or it
  // silently replaces (not merges) Content-Type. That was the exact bug
  // behind the "dataUrl required" error: every apiAuthed() call (avatar
  // upload, media upload, profile save, owner actions...) was sending no
  // Content-Type at all, so the server couldn't parse the JSON body.
  const headers={'Content-Type':'application/json',...(opts.headers||{})};
  return fetch(API_BASE+path,{...opts,headers})
    .then(async r=>{let data={};try{data=await r.json()}catch(e){}
      if(!r.ok) throw new Error(data.error||'error');
      return data});
}
function apiAuthed(path,opts={}){
  return api(path,{...opts,headers:{...(opts.headers||{}),Authorization:'Bearer '+(auth&&auth.accessToken)}});
}
function selfAvatarInner(){return profile.avatarUrl?'':esc((profile.name||'E')[0])}
function selfAvatarStyle(){return profile.avatarUrl?`style="background-image:url('${profile.avatarUrl}');background-size:cover;background-position:center"`:''}

function startAuth(){page='authPhone';authDigits='';authOtp='';renderAuthPhone()}

function renderAuthPhone(err){
  page='authPhone';
  layout(`<div class="authScreen">
    <div class="authLogo">ES</div>
    <h2>${t('authPhoneTitle')}</h2>
    <p class="authSub">${t('authPhoneSub')}</p>
    <button class="authCountryBtn" onclick="openCountryPicker()"><span class="flag">${authCountry.f}</span><span class="cname">${esc(authCountry.n)}</span><span class="chev">${icon('next')}</span></button>
    <div class="authPhoneRow">
      <div class="authDial">${authCountry.d}</div>
      <input id="authPhoneInput" type="tel" inputmode="numeric" placeholder="${t('phoneNumberPh')}" value="${esc(authDigits)}" oninput="authDigits=this.value.replace(/[^0-9]/g,'')">
    </div>
    ${err?`<div class="authError">${esc(err)}</div>`:''}
  </div>
  <button class="authNext" id="authPhoneNext" onclick="submitPhone()" ${authBusy?'disabled':''}>${authBusy?`<span class="authSpinner"></span>`:icon('next')}</button>`,'conversation');
  const inp=$('authPhoneInput');if(inp){inp.focus();inp.selectionStart=inp.selectionEnd=inp.value.length}
}
function openCountryPicker(){
  showModal(`<div class="sheet">
    <div class="sheetHead">${t('chooseCountry')}</div>
    <div class="countrySearch"><input id="countryQ" placeholder="${t('searchCountry')}" oninput="renderCountryList(this.value)"></div>
    <div class="countryList" id="countryList">${countryListHtml()}</div>
  </div>`);
  setTimeout(()=>{const q=$('countryQ');if(q)q.focus()},50);
}
function countryListHtml(q=''){
  q=q.trim();
  const list=q?COUNTRIES.filter(c=>c.n.includes(q)||c.d.includes(q)):COUNTRIES;
  return list.map(c=>`<button class="countryItem" onclick="pickCountry('${c.c}')"><span class="flag">${c.f}</span><span class="cn">${esc(c.n)}</span><span class="cd">${c.d}</span></button>`).join('')||`<div class="empty">${t('noResults')}</div>`;
}
function renderCountryList(q){const l=$('countryList');if(l)l.innerHTML=countryListHtml(q)}
function pickCountry(code){authCountry=COUNTRIES.find(c=>c.c===code)||authCountry;closeModal();renderAuthPhone()}

function submitPhone(){if(authBusy)return;const digits=authDigits.replace(/^0+/,'');if(digits.length<6){renderAuthPhone(t('phoneInvalid'));return}authFullPhone=authCountry.d+digits;authBusy=true;renderAuthPhone();if(window.ESFirebase)window.ESFirebase.requestPhoneCode(authFullPhone);else{authBusy=false;renderAuthPhone('Firebase غير متاح داخل التطبيق')}}
window.nativeFirebaseCodeSent=function(){authBusy=false;authResendAt=Date.now()+60000;authOtp='';renderAuthCode()};
window.nativeFirebaseAuthError=function(message){authBusy=false;authOtp='';if(page==='authCode')renderAuthCode(message||t('codeInvalid'));else renderAuthPhone(message||t('networkError'))};
window.nativeFirebaseAuthSuccess=function(idToken){authBusy=true;renderAuthCode();api('/auth/firebase-login',{method:'POST',body:JSON.stringify({idToken:idToken,name:profile.name||''})}).then(data=>{authBusy=false;auth={accessToken:data.accessToken,refreshToken:data.refreshToken};localStorage.setItem('es_auth',JSON.stringify(auth));profile.phone='+'+(data.user.phone||'');profile.name=data.user.name||profile.name;profile.about=data.user.about||profile.about;profile.username=data.user.username||profile.username;profile.role=data.user.role||'USER';profile.verified=!!data.user.verified;profile.avatarUrl=data.user.avatarUrl||profile.avatarUrl;saveProfile();authNewAccount=!data.user.username&&(!data.user.name||data.user.name==='ES User');if(authNewAccount)renderAuthProfile();else finishLogin()}).catch(e=>{authBusy=false;renderAuthCode(e.message||t('networkError'))})};
function resendCode(){if(Date.now()<authResendAt)return;if(window.ESFirebase){authBusy=true;renderAuthCode();window.ESFirebase.resendPhoneCode(authFullPhone)}else renderAuthCode('Firebase غير متاح داخل التطبيق')}
function verifyCode(){if(authBusy||authOtp.length!==6)return;authBusy=true;renderAuthCode();if(window.ESFirebase)window.ESFirebase.verifyPhoneCode(authOtp);else{authBusy=false;renderAuthCode('Firebase غير متاح داخل التطبيق')}}

function renderAuthCode(err){
  page='authCode';
  const secsLeft=Math.max(0,Math.ceil((authResendAt-Date.now())/1000));
  layout(`<div class="authScreen">
    <div class="authLogo">ES</div>
    <h2>${t('authCodeTitle')}</h2>
    <p class="authSub">${t('authCodeSub')} <b dir="ltr">${authFullPhone}</b></p>
    <button class="authEditNum" onclick="renderAuthPhone()">${t('editNumber')}</button>
    <div class="otpBoxes">${[0,1,2,3,4,5].map(i=>`<input maxlength="1" inputmode="numeric" class="${authOtp[i]?'filled':''}" value="${esc(authOtp[i]||'')}" oninput="otpInput(${i},this)" onkeydown="otpKeydown(${i},event)" data-i="${i}">`).join('')}</div>
    ${err?`<div class="authError">${esc(err)}</div>`:''}
    <button class="authResend" onclick="resendCode()" ${secsLeft>0?'disabled':''}>${secsLeft>0?(LANG==='ar'?`إعادة الإرسال خلال ${secsLeft} ثانية`:`Resend in ${secsLeft}s`):t('resend')}</button>
    <div class="authHint">${t('devOtpHint')}</div>
  </div>`,'conversation');
  const first=document.querySelector(`.otpBoxes input[data-i="${Math.min(authOtp.length,5)}"]`);if(first)first.focus();
  if(secsLeft>0){clearTimeout(window._otpTick);window._otpTick=setTimeout(()=>{if(page==='authCode')renderAuthCode()},1000)}
}
function otpInput(i,el){
  const v=el.value.replace(/[^0-9]/g,'').slice(0,1);
  const arr=authOtp.split('');arr[i]=v;authOtp=arr.join('').slice(0,6);
  el.value=v;el.classList.toggle('filled',!!v);
  if(v&&i<5){const next=document.querySelector(`.otpBoxes input[data-i="${i+1}"]`);if(next)next.focus()}
  if(authOtp.length===6&&authOtp.split('').every(d=>d!==undefined&&d!=='')) verifyCode();
}
function otpKeydown(i,e){
  if(e.key==='Backspace'&&!e.target.value&&i>0){const prev=document.querySelector(`.otpBoxes input[data-i="${i-1}"]`);if(prev){prev.focus();prev.value='';const arr=authOtp.split('');arr[i-1]='';authOtp=arr.join('')}}
}

function renderAuthProfile(err){
  page='authProfile';
  layout(`<div class="authScreen authCenter">
    <div class="authLogo" style="margin:0 auto 22px">ES</div>
    <h2>${t('authProfileTitle')}</h2>
    <p class="authSub">${t('authProfileSub')}</p>
    <div class="authProfileAvatar">
      <div class="avatar" ${selfAvatarStyle()}>${selfAvatarInner()}</div>
      <button class="peCam" onclick="pickAvatarFile()">${icon('camera')}</button>
    </div>
    <input id="apName" class="authNameField" value="${esc(profile.name==='ES User'?'':profile.name)}" placeholder="${t('authProfileNamePh')}" oninput="profile.name=this.value">
    ${err?`<div class="authError">${esc(err)}</div>`:''}
    <input type="file" id="apFile" accept="image/*" class="hidden" onchange="onAvatarPicked(event)">
  </div>
  <button class="authNext" onclick="finishProfile()">${icon('check')}</button>`,'conversation');
}
function pickAvatarFile(){const f=$('apFile');if(f)f.click()}
function onAvatarPicked(e){
  const file=e.target.files&&e.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{profile.avatarUrl=reader.result;renderAuthProfile()};
  reader.readAsDataURL(file);
}
function finishProfile(){
  const name=($('apName')?$('apName').value:profile.name||'').trim();
  if(!name){renderAuthProfile(t('nameRequiredAuth'));return}
  profile.name=name;saveProfile();
  apiAuthed('/users/me',{method:'PATCH',body:JSON.stringify({name})}).catch(()=>{});
  finishLogin();
}
function finishLogin(){
  loggedIn=true;localStorage.setItem('es_loggedin','1');
  go('chats');
}
function logout(){
  showModal(`<div class="sheet">
    <div style="padding:15px"><b style="display:block;font-size:15px;margin-bottom:8px">${t('logoutConfirmTitle')}</b><p style="margin:0;color:var(--muted);font-size:12.5px;line-height:1.7">${t('logoutConfirmDesc')}</p></div>
    <button onclick="closeModal()">${t('cancel')}</button>
    <button onclick="doLogout()" style="color:var(--danger)">${t('logout')}</button>
  </div>`);
}
function doLogout(){
  localStorage.removeItem('es_auth');localStorage.removeItem('es_loggedin');
  localStorage.removeItem('es_profile');localStorage.removeItem('es_chats');localStorage.removeItem('es_calls');
  auth=null;loggedIn=false;
  closeModal();startAuth();
}



/* ================================================================
   ES App v4.0 — media composer, real server sync, statuses/channels/
   communities, phone lookup, stickers and owner moderation.
   ================================================================ */

const EMOJIS=['😀','😂','😍','🥰','😎','😭','😡','🤔','😱','🥳','😴','🤝','👍','👎','👏','🙏','❤️','🔥','✨','💯','🎉','🚀','💚','💙','⭐','🤣','😘','😅','😇','🤩','😈','💔','🙌','👌','✌️','🤌','🫶','😏','😢','😤','🤯','🥺','😳','🤗','😴','🤍','🖤'];
const DEFAULT_STICKERS=['😂','😍','😎','😭','🥰','🤣','😈','🤩','😡','🥺','🔥','💚'];
let recorder=null,recordChunks=[],recordStarted=0,recordTimer=null;
let remoteUser=null,currentUserId=null;
const OWNER_PHONE='201092178171';

function fullUrl(u){return u&&u.startsWith('http')?u:(u?API_BASE+u:'')}
async function uploadDataUrl(dataUrl,name,mime){
  const r=await apiAuthed('/media',{method:'POST',body:JSON.stringify({dataUrl,name:name||'media',mime:mime||''})});
  return fullUrl(r.url);
}
function fileToDataUrl(file,maxW=1600,quality=.84){
  return new Promise((resolve,reject)=>{
    if(!file)return reject(new Error('no file'));
    if(!file.type.startsWith('image/') || file.type==='image/gif'){
      const fr=new FileReader();fr.onload=()=>resolve(fr.result);fr.onerror=reject;fr.readAsDataURL(file);return;
    }
    const fr=new FileReader();fr.onload=()=>{
      const img=new Image();img.onload=()=>{
        const scale=Math.min(1,maxW/Math.max(img.width,img.height));
        const c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.width*scale));c.height=Math.max(1,Math.round(img.height*scale));
        c.getContext('2d').drawImage(img,0,0,c.width,c.height);resolve(c.toDataURL('image/jpeg',quality));
      };img.onerror=reject;img.src=fr.result;
    };fr.onerror=reject;fr.readAsDataURL(file);
  });
}
function messageBubble(m){
  const media=m.mediaUrl?fullUrl(m.mediaUrl):'';
  let body='';
  if(m.sticker) body=`<div class="stickerBubble">${media?`<img src="${esc(media)}" alt="sticker">`:`<span>${esc(m.text)}</span>`}</div>`;
  else if(media && (m.mediaType||'').startsWith('image/')) body=`<img class="msgImage" src="${esc(media)}" alt="${esc(m.fileName||'image')}">`;
  else if(media && (m.mediaType||'').startsWith('video/')) body=`<video class="msgVideo" controls playsinline src="${esc(media)}"></video>`;
  else if(media && (m.mediaType||'').startsWith('audio/')) body=`<audio controls src="${esc(media)}"></audio>`;
  if(m.text) body+=`<div class="msgText">${esc(m.text)}</div>`;
  return `<div class="bubble ${m.mine?'me':''}">${body}<small class="msgTime">${new Date(m.createdAt||Date.now()).toLocaleTimeString(LANG==='ar'?'ar-EG':'en',{hour:'numeric',minute:'2-digit'})}</small></div>`;
}

async function syncRemoteChats(){
  if(!auth||!auth.accessToken)return;
  try{
    const list=await apiAuthed('/chats');
    chats=list.map(c=>({id:c.id,server:true,name:c.name||'ES',text:c.lastMessage||'',time:c.lastMessageAt?new Date(c.lastMessageAt).toLocaleTimeString(LANG==='ar'?'ar-EG':'en',{hour:'numeric',minute:'2-digit'}):t('now'),unread:0,group:!!c.isGroup,msg:[]}));
    save();renderChats();
  }catch(e){/* keep local mode if server is unavailable */}
}
async function openServerChat(userId,name){
  try{const d=await apiAuthed('/chats/with/'+encodeURIComponent(userId),{method:'POST'});chats.unshift({id:d.id,server:true,name,text:'',time:t('now'),unread:0,group:false,msg:[]});save();openConversation(chats.indexOf(chats[0]));}catch(e){showModal(infoSheet('ES',t('networkError')))}
}

function openConversation(i){
  openChat=i;const c=chats[i];if(!c)return;c.unread=0;save();
  layout(`<div class="conversation">
    <div class="chatHead"><button class="back" onclick="renderChats()">${icon('back')}</button><div class="avatar">${esc((c.name||'E')[0])}</div><div class="chHeadName"><div class="name">${esc(c.name||'ES')} ${c.verified?'<span class="verified">✓</span>':''}</div><small>${c.group?t('groups'):t('online')}</small></div><button class="chHeadMore" onclick="chatHeaderMenu(${i})">${icon('more')}</button></div>
    <div class="messages" id="messages"><div class="chatLoading">${c.server?t('loading')||'...':''}</div></div>
    <div class="composer">
      <button class="composeIcon" onclick="openEmojiPicker()">${icon('smile')}</button>
      <input id="message" placeholder="${t('typeMessage')}" oninput="toggleSendMic(this)" onkeydown="if(event.key==='Enter')sendMessage()">
      <button class="composeIcon" onclick="openAttachSheet()">${icon('attach')}</button>
      <button class="sendButton" id="sendButton" onclick="sendMessage()">${icon('send')}</button>
      <button class="micButton" id="micButton" onclick="toggleRecording()">${icon('mic')}</button>
    </div>
    <input type="file" id="galleryInput" class="hidden" accept="image/*,video/*,audio/*" onchange="handleMediaPicked(event,'media')">
    <input type="file" id="cameraInput" class="hidden" accept="image/*" capture="environment" onchange="handleMediaPicked(event,'media')">
    <input type="file" id="stickerInput" class="hidden" accept="image/*" onchange="handleStickerPicked(event)">
  </div>`,'conversation');
  const load=async()=>{
    const box=$('messages');if(!box)return;
    try{
      if(c.server){const ms=await apiAuthed('/chats/'+encodeURIComponent(c.id)+'/messages');box.innerHTML=ms.map(m=>messageBubble({...m,mine:m.senderId===currentUserId})).join('')||`<div class="empty">${t('noMessages')||'لا توجد رسائل بعد'}</div>`;}
      else box.innerHTML=(c.msg||[]).map((m,j)=>typeof m==='string'?`<div class="bubble ${j%2?'me':''}"><div class="msgText">${esc(m)}</div></div>`:messageBubble(m)).join('');
      box.scrollTop=box.scrollHeight;
    }catch(e){box.innerHTML=(c.msg||[]).map(m=>`<div class="bubble"><div class="msgText">${esc(typeof m==='string'?m:m.text||'')}</div></div>`).join('')}
  };load();
}
function toggleSendMic(inp){const has=!!(inp&&inp.value.trim());$('sendButton')?.classList.toggle('hidden',!has);$('micButton')?.classList.toggle('hidden',has)}

async function sendMessage(){
  const inp=$('message');if(!inp||!inp.value.trim()||openChat===null)return;const text=inp.value.trim();const c=chats[openChat];inp.value='';toggleSendMic(inp);
  if(c.server){
    try{await apiAuthed('/chats/'+encodeURIComponent(c.id)+'/messages',{method:'POST',body:JSON.stringify({text})});c.text=text;c.time=t('now');save();openConversation(openChat);focusComposer();return}catch(e){}
  }
  c.msg=c.msg||[];c.msg.push({text,createdAt:new Date().toISOString(),mine:true});c.text=text;c.time=t('now');save();openConversation(openChat);focusComposer();
}
// Only re-opens the keyboard after the user just sent a message (they were
// already typing) — never on first entering a conversation.
function focusComposer(){setTimeout(()=>{const inp=$('message');if(inp)inp.focus()},60)}

function openEmojiPicker(){
  showModal(`<div class="sheet emojiSheet"><div class="sheetHead">${t('emoji')||'الإيموجي'}</div><div class="emojiGrid">${EMOJIS.map(e=>`<button onclick="insertEmoji('${e}')">${e}</button>`).join('')}</div><button onclick="closeModal();openStickerPicker()">${icon('sticker')}<span>${t('stickers')||'الاستيكرات'}</span></button></div>`);
}
function insertEmoji(e){closeModal();const i=$('message');if(i){i.value+=e;i.focus();toggleSendMic(i)}}
function openStickerPicker(){
  showModal(`<div class="sheet stickerSheet"><div class="sheetHead">${t('stickers')||'الاستيكرات'}</div><div class="stickerGrid">${DEFAULT_STICKERS.map(e=>`<button onclick="sendEmojiSticker('${e}')">${e}</button>`).join('')}</div><button onclick="closeModal();$('stickerInput').click()">${icon('edit')}<span>${t('createSticker')||'إنشاء استيكر من صورة'}</span></button></div>`);
}
async function sendEmojiSticker(e){closeModal();if(openChat===null)return;const c=chats[openChat];const m={text:e,sticker:true,createdAt:new Date().toISOString(),mine:true};if(c.server){try{await apiAuthed('/chats/'+c.id+'/messages',{method:'POST',body:JSON.stringify({text:e})})}catch(_){} } c.msg=c.msg||[];c.msg.push(m);openConversation(openChat)}
async function handleStickerPicked(e){const file=e.target.files&&e.target.files[0];if(!file||openChat===null)return;try{const data=await fileToDataUrl(file,700,.9);const url=await uploadDataUrl(data,file.name,file.type);await apiAuthed('/stickers',{method:'POST',body:JSON.stringify({name:file.name,mediaUrl:url,animated:file.type==='image/gif'})}).catch(()=>{});const c=chats[openChat];if(c.server)await apiAuthed('/chats/'+c.id+'/messages/media',{method:'POST',body:JSON.stringify({mediaUrl:url,mediaType:file.type,fileName:file.name,sticker:true})});c.msg=c.msg||[];c.msg.push({mediaUrl:url,mediaType:file.type,fileName:file.name,sticker:true,createdAt:new Date().toISOString(),mine:true});openConversation(openChat)}catch(err){showModal(infoSheet(t('createSticker')||'Sticker',err.message||'Error'))}}

function openAttachSheet(){showModal(`<div class="sheet attachSheet"><div class="sheetHead">${t('media')||'إرسال وسائط'}</div>
<button onclick="closeModal();$('galleryInput').click()">${icon('gallery')}<span>${t('gallery')||'المعرض'}</span></button>
<button onclick="closeModal();$('cameraInput').click()">${icon('camera')}<span>${t('camera')||'الكاميرا'}</span></button>
<button onclick="closeModal();$('stickerInput').click()">${icon('sticker')}<span>${t('createSticker')||'عمل استيكر'}</span></button>
</div>`)}
async function handleMediaPicked(e){const file=e.target.files&&e.target.files[0];if(!file||openChat===null)return;try{
  let data;if(file.type.startsWith('image/'))data=await fileToDataUrl(file);else{const fr=new FileReader();data=await new Promise((res,rej)=>{fr.onload=()=>res(fr.result);fr.onerror=rej;fr.readAsDataURL(file)})}
  const url=await uploadDataUrl(data,file.name,file.type);const c=chats[openChat];
  if(c.server)await apiAuthed('/chats/'+c.id+'/messages/media',{method:'POST',body:JSON.stringify({mediaUrl:url,mediaType:file.type,fileName:file.name})});
  c.msg=c.msg||[];c.msg.push({mediaUrl:url,mediaType:file.type,fileName:file.name,createdAt:new Date().toISOString(),mine:true});c.text=file.type.startsWith('image/')?'📷 صورة':file.type.startsWith('video/')?'فيديو':'ملف صوتي';c.time=t('now');save();openConversation(openChat);
}catch(err){showModal(infoSheet(t('media')||'Media',err.message||t('networkError')))}}

async function toggleRecording(){
  if(recorder&&recorder.state==='recording'){recorder.stop();return}
  try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:true});
    recorder=new MediaRecorder(stream);recordChunks=[];recordStarted=Date.now();
    recorder.ondataavailable=e=>{if(e.data.size)recordChunks.push(e.data)};
    recorder.onstop=async()=>{clearInterval(recordTimer);stream.getTracks().forEach(t=>t.stop());const blob=new Blob(recordChunks,{type:recorder.mimeType||'audio/webm'});if(blob.size<500){return}try{const fr=new FileReader();fr.onload=async()=>{const url=await uploadDataUrl(fr.result,'voice.webm',blob.type);const c=chats[openChat];if(c.server)await apiAuthed('/chats/'+c.id+'/messages/media',{method:'POST',body:JSON.stringify({mediaUrl:url,mediaType:blob.type,fileName:'voice.webm',durationMs:Date.now()-recordStarted})});c.msg=c.msg||[];c.msg.push({mediaUrl:url,mediaType:blob.type,fileName:'voice.webm',createdAt:new Date().toISOString(),mine:true});c.text='🎙️ رسالة صوتية';c.time=t('now');save();openConversation(openChat)};fr.readAsDataURL(blob)}catch(err){showModal(infoSheet(t('voice')||'Voice',err.message))}};
    recorder.start();$('micButton').classList.add('recording');recordTimer=setInterval(()=>{const b=$('micButton');if(b)b.title=Math.round((Date.now()-recordStarted)/1000)+'s'},500);
  }catch(e){showModal(infoSheet(t('voice')||'رسالة صوتية',t('micPermission')||'اسمح للتطبيق باستخدام الميكروفون'))}
}

function renderUpdates(){
 page='updates';document.body.classList.remove('conversationMode');setAppbar(t('updates'),{tabs:`<button class="active">${t('statusTab')||'الحالة'}</button><button onclick="renderChannels()">${t('channels')||'القنوات'}</button>`});
 layout(`<div class="hero"><h2>${t('updates')}</h2><p>${t('updatesHero')}</p></div><div class="card"><button class="listButton" onclick="newStatusForm()"><span class="listIcon">+</span><span><b>${t('addStatus')}</b><small>${t('addStatusSub')}</small></span></button></div><div class="groupLabel">${t('recentStatus')||'الحالات الأخيرة'}</div><div id="statusList" class="list"></div>`);relabelNav();loadStatuses();
}
async function loadStatuses(){try{const ss=await apiAuthed('/statuses');$('statusList').innerHTML=ss.map(s=>`<button class="statusRow"><div class="avatar">${esc((s.user.name||'E')[0])}</div><div><b>${esc(s.user.name)}</b><small>${s.text?esc(s.text):'صورة/فيديو'}</small></div><span class="time">${new Date(s.createdAt).toLocaleTimeString(LANG==='ar'?'ar-EG':'en',{hour:'numeric',minute:'2-digit'})}</span></button>`).join('')||`<div class="empty">${t('noStatus')||'لا توجد حالات'}</div>`}catch(_){}
}
function newStatusForm(){showModal(`<div class="sheet"><div class="sheetHead">${t('addStatus')}</div><textarea id="statusText" class="ncDesc" maxlength="2048" placeholder="${t('statusTextPh')||'اكتب تحديثًا'}"></textarea><button onclick="closeModal();publishStatus()">${icon('send')}<span>${t('send')||'إرسال'}</span></button></div>`)}
async function publishStatus(){const text=($('statusText')?.value||'').trim();if(!text)return;try{await apiAuthed('/statuses',{method:'POST',body:JSON.stringify({text})});renderUpdates()}catch(e){showModal(infoSheet(t('addStatus'),t('networkError')))}}
function renderChannels(){page='updates';setAppbar(t('updates'),{showBack:true});layout(`<div class="hero"><h2>${t('channels')||'القنوات'}</h2><p>${t('channelsHero')||'تابع القنوات وأنشئ قناتك الخاصة.'}</p></div><button class="primaryWide" onclick="newChannelForm()">${icon('broadcast')}<span>${t('createChannel')}</span></button><div id="channelsList" class="list"></div>`);loadChannels()}
async function loadChannels(){try{const cs=await apiAuthed('/channels');$('channelsList').innerHTML=cs.map(c=>`<div class="channelRow"><div class="avatar">${esc(c.name[0])}</div><div><b>${esc(c.name)}</b><small>${esc(c.description||'')}</small></div><button onclick="followChannel('${c.id}')">${t('follow')||'متابعة'}</button></div>`).join('')||`<div class="empty">${t('noChannels')||'لا توجد قنوات'}</div>`}catch(_){}
}
function newChannelForm(){showModal(`<div class="sheet"><div class="sheetHead">${t('createChannel')}</div><input id="channelName" class="authNameField" placeholder="${t('channelName')||'اسم القناة'}"><input id="channelDesc" class="authNameField" placeholder="${t('channelDesc')||'الوصف'}"><button onclick="createChannelNow()">${icon('check')}<span>${t('save')}</span></button></div>`)}
async function createChannelNow(){const name=($('channelName')?.value||'').trim();if(!name)return;try{await apiAuthed('/channels',{method:'POST',body:JSON.stringify({name,description:($('channelDesc')?.value||'').trim()})});closeModal();renderChannels()}catch(e){showModal(infoSheet(t('createChannel'),t('networkError')))}}
async function followChannel(id){await apiAuthed('/channels/'+id+'/follow',{method:'POST'}).catch(()=>{});showModal(infoSheet(t('channels')||'القنوات',t('followed')||'تمت المتابعة'))}

function renderCommunities(){page='communities';document.body.classList.remove('conversationMode');setAppbar(t('communities'));layout(`<div class="hero"><h2>${t('communities')}</h2><p>${t('communitiesHero')}</p></div><button class="primaryWide" onclick="newCommunityForm()">${icon('community')}<span>${t('createCommunity')}</span></button><div id="communitiesList" class="list"></div>`);relabelNav();loadCommunities()}
async function loadCommunities(){try{const cs=await apiAuthed('/communities');$('communitiesList').innerHTML=cs.map(c=>`<div class="channelRow"><div class="avatar">${esc(c.name[0])}</div><div><b>${esc(c.name)}</b><small>${esc(c.description||'')}</small></div></div>`).join('')||`<div class="empty">${t('noCommunities')||'لا توجد مجتمعات بعد'}</div>`}catch(_){}
}
function newCommunityForm(){showModal(`<div class="sheet"><div class="sheetHead">${t('newCommunity')}</div><input id="ncName2" class="authNameField" placeholder="${t('communityName')}"><textarea id="ncDesc2" class="ncDesc">${t('communityWelcome')}</textarea><button onclick="createCommunityNow()">${icon('check')}<span>${t('save')}</span></button></div>`)}
async function createCommunityNow(){const name=($('ncName2')?.value||'').trim();if(!name){showModal(infoSheet(t('newCommunity'),t('nameRequired')));return}try{await apiAuthed('/communities',{method:'POST',body:JSON.stringify({name,description:($('ncDesc2')?.value||'').trim()})});closeModal();renderCommunities()}catch(e){showModal(infoSheet(t('newCommunity'),t('networkError')))}}

function phoneLookup(){
 showModal(`<div class="sheet phoneLookup"><div class="sheetHead">${t('lookupPhone')||'البحث عن رقم'}</div><input id="phoneLookupInput" class="authNameField" inputmode="tel" placeholder="${t('phoneNumberPh')||'رقم الهاتف'}"><button onclick="lookupPhoneNow()">${icon('search')}<span>${t('search')}</span></button><div id="phoneLookupResult"></div></div>`);setTimeout(()=>$('phoneLookupInput')?.focus(),50)
}
async function lookupPhoneNow(){const q=($('phoneLookupInput')?.value||'').replace(/\D/g,'');const box=$('phoneLookupResult');if(!q)return;box.innerHTML='<div class="empty">...</div>';try{const u=await apiAuthed('/users/by-phone/'+q);remoteUser=u;box.innerHTML=`<button class="lookupResult" onclick="closeModal();openServerChat('${u.id}','${esc(u.name)}')"><div class="avatar" ${u.avatarUrl?`style="background-image:url('${esc(fullUrl(u.avatarUrl))}');background-size:cover"`:''}>${u.avatarUrl?'':esc((u.name||'E')[0])}</div><div><b>${esc(u.name)} ${u.verified?'<span class="verified">✓</span>':''}</b><span class="phoneBlue" dir="ltr">+${esc(u.phone)}</span><small>${esc(u.about||'')}</small></div>${icon('next')}</button>`}catch(e){box.innerHTML=`<div class="empty">${t('noResults')}</div>`}}

function renderSettings(){
  page='settings';document.body.classList.remove('conversationMode');setAppbar(t('settings'),{showBack:true});
  const isOwner=profile.role==='OWNER'||profile.phone.replace(/\D/g,'')===OWNER_PHONE;
  layout(`<button class="settingsProfile" onclick="editProfile()"><div class="avatar" ${selfAvatarStyle()}>${selfAvatarInner()}</div><div class="who"><b>${esc(profile.name)} ${profile.verified?'<span class="verified">✓</span>':''}</b><small>${esc(profile.about)||t('localProfile')}</small><small dir="ltr">${esc(profile.phone)}</small></div><span class="settingsChevron">›</span></button>
  <div class="groupLabel">${t('account')}</div><div>
   <button class="listButton" onclick="editProfile()"><span class="listIcon">${icon('user')}</span><span><b>${t('accountRow')}</b><small>${t('accountSub')}</small></span></button>
   <button class="listButton" onclick="phoneLookup()"><span class="listIcon">${icon('search')}</span><span><b>${t('lookupPhone')||'البحث عن رقم'}</b><small>${t('lookupPhoneSub')||'اعثر على مستخدم مسجل بالرقم'}</small></span></button>
   <button class="listButton" onclick="privacySettings()"><span class="listIcon">${icon('lock')}</span><span><b>${t('privacy')}</b><small>${t('privacySub')}</small></span></button>
   <button class="listButton" onclick="devicesSettings()"><span class="listIcon">${icon('devices')}</span><span><b>${t('devices')}</b><small>${t('devicesSub')}</small></span></button>
  </div>
  <div class="groupLabel">${t('preferences')}</div><div>
   <button class="listButton" onclick="chatsSettings()"><span class="listIcon">${icon('chat')}</span><span><b>${t('chatsRow')}</b><small>${t('chatsSub')}</small></span></button>
   <button class="listButton" onclick="themeSettings()"><span class="listIcon">${icon('settings')}</span><span><b>${t('appearance')}</b><small>${t('appearanceSub')}</small></span></button>
   <button class="listButton" onclick="notificationsSettings()"><span class="listIcon">${icon('bell')}</span><span><b>${t('notifications')}</b><small>${t('notificationsSub')}</small></span></button>
   <button class="listButton" onclick="storageSettings()"><span class="listIcon">${icon('storage')}</span><span><b>${t('storage')}</b><small>${t('storageSub')}</small></span></button>
   <button class="listButton" onclick="accessibilitySettings()"><span class="listIcon">${icon('access')}</span><span><b>${t('accessibility')}</b><small>${t('accessibilitySub')}</small></span></button>
   <button class="listButton" onclick="languageSettings()"><span class="listIcon">${icon('globe')}</span><span><b>${t('language')}</b><small>${LANG==='ar'?t('arabic'):t('english')} ${t('langHint')}</small></span></button>
  </div>
  ${isOwner?`<div class="groupLabel">${t('ownerPanel')||'لوحة المالك'}</div><div><button class="listButton ownerButton" onclick="ownerPanel()"><span class="listIcon">${icon('shield')}</span><span><b>${t('ownerPanel')||'لوحة المالك'}</b><small>${t('ownerPanelSub')||'إدارة الحسابات والبلاغات والتوثيق'}</small></span></button></div>`:''}
  <div class="groupLabel">${t('support')}</div><div>
   <button class="listButton" onclick="helpSettings()"><span class="listIcon">${icon('help')}</span><span><b>${t('help')}</b><small>${t('helpSub')}</small></span></button>
   <button class="listButton" onclick="inviteFriend()"><span class="listIcon">${icon('invite')}</span><span><b>${t('invite')}</b><small>${t('inviteSub')}</small></span></button>
   <button class="listButton" onclick="appUpdatesSettings()"><span class="listIcon">${icon('appupdate')}</span><span><b>${t('appUpdates')}</b><small>${t('appUpdatesSub')}</small></span></button>
   <button class="listButton" onclick="showAbout()"><span class="listIcon">${icon('user')}</span><span><b>${t('about')}</b><small>${t('aboutSub')}</small></span></button>
   <button class="listButton" onclick="logout()"><span class="listIcon danger">${icon('block')}</span><span><b class="dangerText">${t('logout')}</b><small>${t('logoutSub')}</small></span></button>
  </div>`);relabelNav();
}
function editProfile(){showModal(`<div class="sheet profileEdit"><div class="peAvatarWrap"><div class="avatar big" ${selfAvatarStyle()}>${selfAvatarInner()}</div><button class="peCam" onclick="document.getElementById('profileAvatarInput').click()">${icon('camera')}</button></div><input type="file" id="profileAvatarInput" accept="image/*" class="hidden" onchange="saveAvatarFile(event)"><label class="peField"><span>${t('name')}</span><input id="peName" value="${esc(profile.name)}"></label><label class="peField"><span>${t('aboutField')}</span><input id="peAbout" value="${esc(profile.about)}"></label><label class="peField"><span>${t('reservedUsername')}</span><input id="peUsername" value="${esc(profile.username)}"></label><div class="peStatic"><span class="listIcon">${icon('phone')}</span><span><b>${t('phone')}</b><small dir="ltr">${esc(profile.phone)}</small></span></div><button class="peSave" onclick="saveProfileEditReal()">${icon('check')}<span>${t('save')}</span></button></div>`)}
async function saveAvatarFile(e){const f=e.target.files&&e.target.files[0];if(!f)return;try{const data=await fileToDataUrl(f,900,.86);profile.avatarUrl=await uploadDataUrl(data,f.name,f.type);saveProfile();await apiAuthed('/users/me',{method:'PATCH',body:JSON.stringify({avatarUrl:profile.avatarUrl})});editProfile()}catch(err){profile.avatarUrl='';saveProfile();showModal(infoSheet(t('profile')||'الملف الشخصي',err.message||t('networkError')))}}
async function saveProfileEditReal(){profile.name=($('peName')?.value||profile.name).trim()||profile.name;profile.about=($('peAbout')?.value||'').trim();profile.username=($('peUsername')?.value||'').trim().replace(/^@/,'');saveProfile();try{const u=await apiAuthed('/users/me',{method:'PATCH',body:JSON.stringify({name:profile.name,about:profile.about,username:profile.username||null,avatarUrl:profile.avatarUrl||null})});Object.assign(profile,u);saveProfile()}catch(_){}closeModal();renderSettings()}

function ownerPanel(){showModal(`<div class="sheet ownerSheet"><div class="sheetHead">${t('ownerPanel')||'لوحة المالك'}</div><div class="adminTabs"><button class="active" onclick="showOwnerUsers()">الحسابات</button><button onclick="showOwnerReports()">البلاغات</button></div><div id="ownerUsers"><div class="empty">...</div></div></div>`);showOwnerUsers()}
function showOwnerUsers(){const b=$('ownerUsers');if(!b)return;b.innerHTML='<div class="empty">...</div>';loadOwnerUsers()}
function showOwnerReports(){const b=$('ownerUsers');if(!b)return;b.innerHTML='<div class="empty">...</div>';loadOwnerReports()}
async function loadOwnerReports(){const box=$('ownerUsers');try{const rs=await apiAuthed('/admin/reports');box.innerHTML=rs.map(r=>`<div class="adminUser"><div class="adminInfo"><b>${esc(r.target?.name||'حساب')}</b><small dir="ltr">+${esc(r.target?.phone||'')}</small><small>${esc(r.reason||'بدون سبب')} · ${esc(r.status||'pending')}</small><div class="adminActions"><button onclick="reviewReport('${r.id}','resolved')">مراجعة</button><button onclick="reviewReport('${r.id}','dismissed')">رفض البلاغ</button></div></div></div>`).join('')||'<div class="empty">لا توجد بلاغات</div>'}catch(e){box.innerHTML=`<div class="empty">${esc(e.message||'تعذر تحميل البلاغات')}</div>`}}
async function reviewReport(id,status){await apiAuthed('/admin/reports/'+id,{method:'PATCH',body:JSON.stringify({status})}).catch(()=>{});loadOwnerReports()}
async function loadOwnerUsers(){const box=$('ownerUsers');try{const us=await apiAuthed('/admin/users');box.innerHTML=us.map(u=>`<div class="adminUser"><div class="avatar">${esc((u.name||'E')[0])}</div><div class="adminInfo"><b>${esc(u.name)} ${u.verified?'<span class="verified">✓</span>':''}</b><small dir="ltr">+${esc(u.phone)}</small><small>${u.role} · ${u.blocked?'محظور ':''}${u.restricted?'مقيد ':''}${u.suspendedUntil?'مؤقت ':''}</small><div class="adminActions"><button onclick="adminAction('${u.id}','verified',${!u.verified})">${u.verified?'إلغاء التوثيق':'توثيق ✓'}</button><button onclick="adminAction('${u.id}','restricted',${!u.restricted})">${u.restricted?'فك التقييد':'تقييد'}</button><button onclick="adminAction('${u.id}','blocked',${!u.blocked})">${u.blocked?'فك الحظر':'حظر'}</button><button onclick="tempBan('${u.id}')">حظر 24 ساعة</button>${u.suspendedUntil?`<button onclick="clearTempBan('${u.id}')">فك الحظر المؤقت</button>`:''}</div></div></div>`).join('')}catch(e){box.innerHTML=`<div class="empty">${esc(e.message||t('networkError'))}</div>`}}
async function adminAction(id,key,val){await apiAuthed('/admin/users/'+id,{method:'PATCH',body:JSON.stringify({[key]:val})}).catch(()=>{});loadOwnerUsers()}
async function tempBan(id){await apiAuthed('/admin/users/'+id,{method:'PATCH',body:JSON.stringify({suspendedUntil:new Date(Date.now()+24*60*60*1000).toISOString()})}).catch(()=>{});loadOwnerUsers()}
async function clearTempBan(id){await apiAuthed('/admin/users/'+id,{method:'PATCH',body:JSON.stringify({suspendedUntil:null})}).catch(()=>{});loadOwnerUsers()}

// Keep the demo UI usable even if the server is temporarily offline.
async function bootRemote(){
  if(!auth||!auth.accessToken)return;
  try{remoteUser=await apiAuthed('/auth/me');currentUserId=remoteUser.id;Object.assign(profile,remoteUser);saveProfile()}catch(_){}
  syncRemoteChats();
}

// Add missing strings without touching the original translation table.
Object.assign(STR,{
  loading:{ar:'جارٍ التحميل…',en:'Loading…'},noMessages:{ar:'لا توجد رسائل بعد',en:'No messages yet'},emoji:{ar:'الإيموجي',en:'Emoji'},stickers:{ar:'الاستيكرات',en:'Stickers'},createSticker:{ar:'إنشاء استيكر من صورة',en:'Create sticker from photo'},media:{ar:'إرسال وسائط',en:'Send media'},gallery:{ar:'المعرض',en:'Gallery'},camera:{ar:'الكاميرا',en:'Camera'},voice:{ar:'رسالة صوتية',en:'Voice message'},micPermission:{ar:'اسمح للتطبيق باستخدام الميكروفون.',en:'Allow microphone access for voice messages.'},send:{ar:'إرسال',en:'Send'},profile:{ar:'الملف الشخصي',en:'Profile'},lookupPhone:{ar:'البحث عن رقم',en:'Find by phone number'},lookupPhoneSub:{ar:'اعثر على مستخدم مسجل بالرقم',en:'Find a registered user by phone'},statusTab:{ar:'الحالة',en:'Status'},channels:{ar:'القنوات',en:'Channels'},channelsHero:{ar:'تابع القنوات وأنشئ قناتك الخاصة.',en:'Follow channels and create your own.'},channelName:{ar:'اسم القناة',en:'Channel name'},channelDesc:{ar:'وصف القناة',en:'Channel description'},follow:{ar:'متابعة',en:'Follow'},followed:{ar:'تمت المتابعة',en:'Followed'},noChannels:{ar:'لا توجد قنوات',en:'No channels'},recentStatus:{ar:'الحالات الأخيرة',en:'Recent status'},statusTextPh:{ar:'اكتب تحديثًا',en:'Write an update'},noStatus:{ar:'لا توجد حالات',en:'No status'},noCommunities:{ar:'لا توجد مجتمعات بعد',en:'No communities yet'},ownerPanel:{ar:'لوحة المالك',en:'Owner panel'},ownerPanelSub:{ar:'حظر وتقييد وحظر مؤقت ومراجعة وتوثيق الحسابات',en:'Block, restrict, temporary ban, review and verify accounts'},storage:{ar:'التخزين والبيانات',en:'Storage and data'}
});

// (duplicate relabelNav removed — see the one defined near updateNav() above,
// which keeps the icons instead of hiding them.)


function openMenu(){showModal(`<div class="sheet">
<button onclick="closeModal();newChat()">${icon('chat')}<span>${t('newChat')}</span></button>
<button onclick="closeModal();newGroupForm()">${icon('community')}<span>${t('newGroup')}</span></button>
<button onclick="closeModal();phoneLookup()">${icon('search')}<span>${t('lookupPhone')||'البحث عن رقم'}</span></button>
<button onclick="closeModal();markAllRead()">${icon('check')}<span>${t('markAllRead')}</span></button>
<button onclick="closeModal();renderSettings()">${icon('settings')}<span>${t('settings')}</span></button>
<button onclick="closeModal();showAbout()">${icon('user')}<span>${t('about')}</span></button></div>`)}
function newChat(){showModal(`<div class="sheet"><div class="sheetHead">${t('newChat')}</div><input id="newChatPhone" class="authNameField" inputmode="tel" placeholder="${t('phoneNumberPh')}"><button onclick="startChatByPhone()">${icon('search')}<span>${t('search')}</span></button></div>`)}
async function startChatByPhone(){const q=($('newChatPhone')?.value||'').replace(/\D/g,'');if(!q)return;try{const u=await apiAuthed('/users/by-phone/'+q);remoteUser=u;closeModal();await openServerChat(u.id,u.name)}catch(e){showModal(infoSheet(t('newChat'),t('noResults')))}}
function newGroupForm(){showModal(`<div class="sheet"><div class="sheetHead">${t('newGroup')}</div><input id="groupName" class="authNameField" placeholder="${t('groupName')||'اسم المجموعة'}"><input id="groupPhones" class="authNameField" inputmode="tel" placeholder="${t('groupPhones')||'أرقام الأعضاء مفصولة بفاصلة'}"><button onclick="createGroupNow()">${icon('check')}<span>${t('createGroupBtn')}</span></button></div>`)}
async function createGroupNow(){const name=($('groupName')?.value||'').trim();const phones=($('groupPhones')?.value||'').split(',').map(x=>x.replace(/\D/g,'')).filter(Boolean);if(!name)return;try{const ids=[];for(const ph of phones){try{const u=await apiAuthed('/users/by-phone/'+ph);ids.push(u.id)}catch(_){} }const g=await apiAuthed('/groups',{method:'POST',body:JSON.stringify({name,memberIds:ids})});closeModal();chats.unshift({id:g.id,server:true,name:g.name,time:t('now'),text:'',unread:0,group:true,msg:[]});save();renderChats()}catch(e){showModal(infoSheet(t('newGroup'),e.message||t('networkError')))}}

const accent=localStorage.getItem('accent');if(accent)document.documentElement.style.setProperty('--green',accent);applyLangDom();applySettings();
if(loggedIn&&auth&&auth.accessToken){bootRemote().finally(()=>renderChats())}else{startAuth()}

/* ============ REAL SERVER-BACKED MESSAGING (overrides local-only demo versions above) ============ */
let msgPollTimer=null;
function stopMsgPoll(){if(msgPollTimer){clearInterval(msgPollTimer);msgPollTimer=null}}
async function loadServerMessages(chatId){
  try{
    const list=await apiAuthed('/chats/'+encodeURIComponent(chatId)+'/messages');
    return list.map(m=>({id:m.id,text:m.text,mine:m.senderId===currentUserId,createdAt:m.createdAt}));
  }catch(e){return null}
}
function renderMessagesInto(list){
  const box=$('messages');
  if(!box)return;
  box.innerHTML=(list&&list.length)?list.map(m=>`<div class="bubble ${m.mine?'me':''}"><div class="msgText">${esc(m.text)}</div><small class="msgTime">${new Date(m.createdAt||Date.now()).toLocaleTimeString(LANG==='ar'?'ar-EG':'en',{hour:'numeric',minute:'2-digit'})}</small></div>`).join(''):`<div class="empty">${t('noMessages')}</div>`;
  box.scrollTop=box.scrollHeight;
}
async function openConversation(i){
  stopMsgPoll();
  openChat=i;const c=chats[i];c.unread=0;save();
  layout(`<div class="conversation">
    <div class="chatHead"><button class="back" onclick="stopMsgPoll();renderChats()">${icon('back')}</button><div class="avatar">${esc(c.name[0])}</div><div class="chHeadName"><div class="name">${esc(c.name)}</div><small>${t('online')}</small></div><button class="chHeadMore" onclick="chatHeaderMenu(${i})">${icon('more')}</button></div>
    <div class="messages" id="messages"><div class="empty">${t('loading')}</div></div>
    <div class="composer"><input id="message" placeholder="${t('typeMessage')}" onkeydown="if(event.key==='Enter')sendMessage()"><button onclick="sendMessage()">${icon('send')}</button></div>
  </div>`, 'conversation');
  if(c.server && c.id && auth && auth.accessToken){
    const list=await loadServerMessages(c.id);
    if(list)renderMessagesInto(list);
    else renderMessagesInto((c.msg||[]).map(txt=>({text:txt,mine:false})));
    msgPollTimer=setInterval(async()=>{
      if(openChat!==i)return stopMsgPoll();
      const fresh=await loadServerMessages(c.id);
      if(fresh)renderMessagesInto(fresh);
    },4000);
  } else {
    renderMessagesInto((c.msg||[]).map(txt=>({text:txt,mine:false})));
  }
}
async function sendMessage(){
  const inp=$('message');if(!inp||!inp.value.trim())return;const text=inp.value.trim();
  const c=chats[openChat];
  inp.value='';
  if(c.server && c.id && auth && auth.accessToken){
    try{
      await apiAuthed('/chats/'+encodeURIComponent(c.id)+'/messages',{method:'POST',body:JSON.stringify({text})});
      c.text=text;c.time=t('now');save();
      const fresh=await loadServerMessages(c.id);
      if(fresh)renderMessagesInto(fresh);
    }catch(e){showModal(infoSheet(t('typeMessage'),e.message||t('networkError')))}
  } else {
    c.msg=c.msg||[];c.msg.push(text);c.text=text;c.time=t('now');save();
    renderMessagesInto((c.msg||[]).map(txt=>({text:txt,mine:true})));
  }
}

/* ============ REAL SERVER-BACKED STATUSES ============ */
async function renderUpdates(){
  page='updates';document.body.classList.remove('conversationMode');
  setAppbar(t('updates'));
  layout(`<div class="hero"><h2>${t('updates')}</h2><p>${t('updatesHero')}</p></div>
  <div class="card"><button class="listButton" onclick="addStatusPrompt()"><span class="listIcon">+</span><span><b>${t('addStatus')}</b><small>${t('addStatusSub')}</small></span></button></div>
  <div class="groupLabel">${t('recentStatus')}</div>
  <div class="list" id="statusList"><div class="empty">${t('loading')}</div></div>`);
  relabelNav();
  if(auth&&auth.accessToken){
    try{
      const list=await apiAuthed('/statuses');
      const box=$('statusList');
      if(box)box.innerHTML=list.length?list.map(s=>`<div class="chat"><div class="avatar">${esc((s.user&&s.user.name||'E')[0])}</div><div class="chatMain"><div class="row"><div class="name">${esc((s.user&&s.user.name)||'ES')}</div></div><div class="row"><div class="preview">${esc(s.text||'')}</div></div></div></div>`).join(''):`<div class="empty">${t('noStatus')}</div>`;
    }catch(e){const box=$('statusList');if(box)box.innerHTML=`<div class="empty">${t('noStatus')}</div>`}
  }
}
function addStatusPrompt(){showModal(`<div class="sheet"><div class="sheetHead">${t('addStatus')}</div><textarea id="statusText" class="ncDesc" maxlength="700" placeholder="${t('statusTextPh')}"></textarea><button onclick="postStatusNow()">${icon('check')}<span>${t('save')}</span></button></div>`)}
async function postStatusNow(){
  const text=($('statusText')?.value||'').trim();
  if(!text)return;
  try{await apiAuthed('/statuses',{method:'POST',body:JSON.stringify({text})});closeModal();renderUpdates()}
  catch(e){showModal(infoSheet(t('addStatus'),e.message||t('networkError')))}
}

/* ============ REAL SERVER-BACKED COMMUNITIES ============ */
async function renderCommunities(){
  page='communities';document.body.classList.remove('conversationMode');
  setAppbar(t('communities'));
  layout(`<div class="hero"><h2>${t('communities')}</h2><p>${t('communitiesHero')}</p></div>
  <div class="card"><button class="listButton" onclick="communityIntro()"><span class="listIcon">${icon('community')}</span><span><b>${t('createCommunity')}</b></span></button></div>
  <div class="groupLabel">${t('communities')}</div>
  <div class="list" id="communityList"><div class="empty">${t('loading')}</div></div>`);
  relabelNav();
  if(auth&&auth.accessToken){
    try{
      const list=await apiAuthed('/communities');
      const box=$('communityList');
      if(box)box.innerHTML=list.length?list.map(c=>`<div class="chat"><div class="avatar">${esc(c.name[0])}</div><div class="chatMain"><div class="row"><div class="name">${esc(c.name)}</div></div><div class="row"><div class="preview">${(c._count&&c._count.members)||0} ${t('groups')||''}</div></div></div></div>`).join(''):`<div class="empty">${t('noCommunities')}</div>`;
    }catch(e){const box=$('communityList');if(box)box.innerHTML=`<div class="empty">${t('noCommunities')}</div>`}
  }
}
async function createCommunity(){
  const name=($('ncName').value||'').trim();
  const desc=($('ncDesc')?.value||'').trim();
  if(!name){showModal(infoSheet(t('newCommunity'),t('nameRequired')));return}
  try{
    await apiAuthed('/communities',{method:'POST',body:JSON.stringify({name,description:desc})});
    showModal(infoSheet(name,t('communityCreated')));
    go('communities');
  }catch(e){showModal(infoSheet(t('newCommunity'),e.message||t('networkError')))}
}

/* ============ REAL SERVER-BACKED MESSAGING (overrides local-only demo versions above) ============ */
let msgPollTimer=null;
function stopMsgPoll(){if(msgPollTimer){clearInterval(msgPollTimer);msgPollTimer=null}}
async function loadServerMessages(chatId){
  try{
    const list=await apiAuthed('/chats/'+encodeURIComponent(chatId)+'/messages');
    return list.map(m=>({id:m.id,text:m.text,mine:m.senderId===currentUserId,createdAt:m.createdAt}));
  }catch(e){return null}
}
function renderMessagesInto(list){
  const box=$('messages');
  if(!box)return;
  box.innerHTML=(list&&list.length)?list.map(m=>`<div class="bubble ${m.mine?'me':''}"><div class="msgText">${esc(m.text)}</div><small class="msgTime">${new Date(m.createdAt||Date.now()).toLocaleTimeString(LANG==='ar'?'ar-EG':'en',{hour:'numeric',minute:'2-digit'})}</small></div>`).join(''):`<div class="empty">${t('noMessages')}</div>`;
  box.scrollTop=box.scrollHeight;
}
async function openConversation(i){
  stopMsgPoll();
  openChat=i;const c=chats[i];c.unread=0;save();
  layout(`<div class="conversation">
    <div class="chatHead"><button class="back" onclick="stopMsgPoll();renderChats()">${icon('back')}</button><div class="avatar">${esc(c.name[0])}</div><div class="chHeadName"><div class="name">${esc(c.name)}</div><small>${t('online')}</small></div><button class="chHeadMore" onclick="chatHeaderMenu(${i})">${icon('more')}</button></div>
    <div class="messages" id="messages"><div class="empty">${t('loading')}</div></div>
    <div class="composer"><input id="message" placeholder="${t('typeMessage')}" onkeydown="if(event.key==='Enter')sendMessage()"><button onclick="sendMessage()">${icon('send')}</button></div>
  </div>`, 'conversation');
  if(c.server && c.id && auth && auth.accessToken){
    const list=await loadServerMessages(c.id);
    if(list)renderMessagesInto(list);
    else renderMessagesInto((c.msg||[]).map(txt=>({text:txt,mine:false})));
    msgPollTimer=setInterval(async()=>{
      if(openChat!==i)return stopMsgPoll();
      const fresh=await loadServerMessages(c.id);
      if(fresh)renderMessagesInto(fresh);
    },4000);
  } else {
    renderMessagesInto((c.msg||[]).map(txt=>({text:txt,mine:false})));
  }
}
async function sendMessage(){
  const inp=$('message');if(!inp||!inp.value.trim())return;const text=inp.value.trim();
  const c=chats[openChat];
  inp.value='';
  if(c.server && c.id && auth && auth.accessToken){
    try{
      await apiAuthed('/chats/'+encodeURIComponent(c.id)+'/messages',{method:'POST',body:JSON.stringify({text})});
      c.text=text;c.time=t('now');save();
      const fresh=await loadServerMessages(c.id);
      if(fresh)renderMessagesInto(fresh);
    }catch(e){showModal(infoSheet(t('typeMessage'),e.message||t('networkError')))}
  } else {
    c.msg=c.msg||[];c.msg.push(text);c.text=text;c.time=t('now');save();
    renderMessagesInto((c.msg||[]).map(txt=>({text:txt,mine:true})));
  }
}

/* ============ REAL SERVER-BACKED STATUSES ============ */
async function renderUpdates(){
  page='updates';document.body.classList.remove('conversationMode');
  setAppbar(t('updates'));
  layout(`<div class="hero"><h2>${t('updates')}</h2><p>${t('updatesHero')}</p></div>
  <div class="card"><button class="listButton" onclick="addStatusPrompt()"><span class="listIcon">+</span><span><b>${t('addStatus')}</b><small>${t('addStatusSub')}</small></span></button></div>
  <div class="groupLabel">${t('recentStatus')}</div>
  <div class="list" id="statusList"><div class="empty">${t('loading')}</div></div>`);
  relabelNav();
  if(auth&&auth.accessToken){
    try{
      const list=await apiAuthed('/statuses');
      const box=$('statusList');
      if(box)box.innerHTML=list.length?list.map(s=>`<div class="chat"><div class="avatar">${esc((s.user&&s.user.name||'E')[0])}</div><div class="chatMain"><div class="row"><div class="name">${esc((s.user&&s.user.name)||'ES')}</div></div><div class="row"><div class="preview">${esc(s.text||'')}</div></div></div></div>`).join(''):`<div class="empty">${t('noStatus')}</div>`;
    }catch(e){const box=$('statusList');if(box)box.innerHTML=`<div class="empty">${t('noStatus')}</div>`}
  }
}
function addStatusPrompt(){showModal(`<div class="sheet"><div class="sheetHead">${t('addStatus')}</div><textarea id="statusText" class="ncDesc" maxlength="700" placeholder="${t('statusTextPh')}"></textarea><button onclick="postStatusNow()">${icon('check')}<span>${t('save')}</span></button></div>`)}
async function postStatusNow(){
  const text=($('statusText')?.value||'').trim();
  if(!text)return;
  try{await apiAuthed('/statuses',{method:'POST',body:JSON.stringify({text})});closeModal();renderUpdates()}
  catch(e){showModal(infoSheet(t('addStatus'),e.message||t('networkError')))}
}

/* ============ REAL SERVER-BACKED COMMUNITIES ============ */
async function renderCommunities(){
  page='communities';document.body.classList.remove('conversationMode');
  setAppbar(t('communities'));
  layout(`<div class="hero"><h2>${t('communities')}</h2><p>${t('communitiesHero')}</p></div>
  <div class="card"><button class="listButton" onclick="communityIntro()"><span class="listIcon">${icon('community')}</span><span><b>${t('createCommunity')}</b></span></button></div>
  <div class="groupLabel">${t('communities')}</div>
  <div class="list" id="communityList"><div class="empty">${t('loading')}</div></div>`);
  relabelNav();
  if(auth&&auth.accessToken){
    try{
      const list=await apiAuthed('/communities');
      const box=$('communityList');
      if(box)box.innerHTML=list.length?list.map(c=>`<div class="chat"><div class="avatar">${esc(c.name[0])}</div><div class="chatMain"><div class="row"><div class="name">${esc(c.name)}</div></div><div class="row"><div class="preview">${(c._count&&c._count.members)||0} ${t('groups')||''}</div></div></div></div>`).join(''):`<div class="empty">${t('noCommunities')}</div>`;
    }catch(e){const box=$('communityList');if(box)box.innerHTML=`<div class="empty">${t('noCommunities')}</div>`}
  }
}
async function createCommunity(){
  const name=($('ncName').value||'').trim();
  const desc=($('ncDesc')?.value||'').trim();
  if(!name){showModal(infoSheet(t('newCommunity'),t('nameRequired')));return}
  try{
    await apiAuthed('/communities',{method:'POST',body:JSON.stringify({name,description:desc})});
    showModal(infoSheet(name,t('communityCreated')));
    go('communities');
  }catch(e){showModal(infoSheet(t('newCommunity'),e.message||t('networkError')))}
}

/* ============ ON-SCREEN ERROR REPORTER (so we can see JS crashes without a computer) ============ */
window.addEventListener('error',function(e){
  try{
    const el=document.getElementById('screen');
    if(el)el.innerHTML='<div style="padding:20px;color:#fff;white-space:pre-wrap;font-size:12px;direction:ltr;text-align:left">JS ERROR:\n'+(e.message||'')+'\nat '+(e.filename||'')+':'+(e.lineno||'')+':'+(e.colno||'')+'\n'+((e.error&&e.error.stack)||'');
  }catch(_){}
});
window.addEventListener('unhandledrejection',function(e){
  try{
    const el=document.getElementById('screen');
    const reason=e.reason&&(e.reason.stack||e.reason.message||e.reason);
    if(el)el.innerHTML='<div style="padding:20px;color:#fff;white-space:pre-wrap;font-size:12px;direction:ltr;text-align:left">PROMISE ERROR:\n'+reason+'</div>';
  }catch(_){}
});

/* ============ NETWORK CALLS NOW TIME OUT INSTEAD OF HANGING FOREVER (overrides earlier api()) ============ */
function api(path,opts={}){
  const headers={'Content-Type':'application/json',...(opts.headers||{})};
  const controller=new AbortController();
  const timeoutId=setTimeout(()=>controller.abort(),8000);
  return fetch(API_BASE+path,{...opts,headers,signal:controller.signal})
    .then(async r=>{clearTimeout(timeoutId);let data={};try{data=await r.json()}catch(e){}
      if(!r.ok) throw new Error(data.error||('HTTP '+r.status));
      return data})
    .catch(err=>{clearTimeout(timeoutId);
      if(err && err.name==='AbortError') throw new Error(t('networkError')+' (timeout)');
      throw err;
    });
}
