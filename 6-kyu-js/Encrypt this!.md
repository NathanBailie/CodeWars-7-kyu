# 📝 Encrypt this!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5848565e273af816fb000449)

### 💡 Solution

```javascript
function encryptThis(str) {
    return str.split(' ').map((word, i) => {
        const w = word.split('');
        w[0] = word.charCodeAt(0);
        [w[1], w[w.length - 1]] = [w[w.length - 1], w[1]];
        return w.join('');
    }).join(' ');
}
```
