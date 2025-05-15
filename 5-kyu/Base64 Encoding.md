# 📝 Base64 Encoding

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5270f22f862516c686000161)

### 💡 Solution

```javascript
String.prototype.toBase64 = function () {
    return Buffer.from(this).toString('base64');
};

String.prototype.fromBase64 = function () {
    return Buffer.from(this, 'base64').toString();
};
```
