# 📝 Mexican Wave

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58f5c63f1e26ecda7e000029)

### 💡 Solution

```javascript
function wave(str) {
    return Array(str.length).fill(str).map((w, i) => w.slice(0, i).toLowerCase() + w.slice(i, i + 1).toUpperCase() + w.slice(i + 1).toLowerCase()).filter(v => /[A-Z]/.test(v));
}
```
