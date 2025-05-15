# 📝 Is that a real phone number (British version)

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/581a52d305fe7756720002eb)

### 💡 Solution

```javascript
function validateNumber(str) {
    return /^(0|-0|\+44)?7(-*[0-9]){9}$/.test(str) ? 'In with a chance' : 'Plenty more fish in the sea';
}
```
