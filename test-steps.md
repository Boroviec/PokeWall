# Firebase Testing Steps

1. Open browser console (F12)
2. Enable admin access:
```javascript
localStorage.setItem('isAdmin', 'Proste89');
location.reload();
```

3. Test uploading:
- Click any card
- Upload button should be visible
- Upload an image
- Check Firebase Storage Console to verify image is saved
- Check Firebase Realtime Database Console to verify URL is saved

4. Test removing:
- Click a card with custom image
- Remove button should be visible
- Click remove
- Check Firebase Storage and Database to verify deletion

5. Test viewing:
- Open in incognito window (no admin)
- Custom images should be visible
- Upload/Remove buttons should be hidden
