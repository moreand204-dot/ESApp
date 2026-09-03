ES App v4.0 update

Implemented in the uploaded project:
- WhatsApp-like media composer: gallery, camera capture, image/video/audio attachments.
- Voice-message recording through Android WebView microphone permissions.
- Emoji picker and sticker picker; create a sticker from an image and send it.
- Profile photo upload to the backend and profile editing.
- Phone-number lookup; registered users are displayed as clickable blue phone rows.
- Real server chat sync for 1:1 chats and groups.
- Group creation using member phone numbers.
- Status publishing/listing.
- Channel creation/following.
- Community creation/listing.
- Owner-only moderation panel: verify, block/unblock, restrict/unrestrict, 24-hour temporary ban, and reports API.
- Owner phone: 201092178171. Owner is automatically verified with the blue badge on the server.
- Bottom navigation changed to text-only; navigation icons are hidden as requested.

Important:
- This is source code, not a tested APK. The build environment here has no Android SDK/Gradle installation, so an actual Android build was not possible in this session.
- Run the backend migration before using the new server features.
- Set OWNER_PHONE=201092178171 in the backend .env.
- The client currently uses API_BASE http://132.243.253.240:5436 unless localStorage key es_api is set.
