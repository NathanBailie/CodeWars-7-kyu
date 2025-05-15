# 📝 Master of Files

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/574bd867d277832448000adf)

### 💡 Solution

```javascript
String.prototype.isAudio = function () { return /^[a-zA-Z]+\.(mp3|flac|al?ac)$/.test(this); }
String.prototype.isImage = function () { return /^[a-zA-Z]+\.(jpe?g|png|bmp|gif)$/.test(this); }
```
