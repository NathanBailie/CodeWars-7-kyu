# 📝 Decipher this!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)

### 💡 Solution

```javascript
function decipherThis(str) {
    return str.replace(/\d+/g, n => String.fromCharCode(n))
        .replace(/\b(\w)(\w)(\w*)(\w)\b/g, (_, a, b, c, d) => a + d + c + b);
}
```
