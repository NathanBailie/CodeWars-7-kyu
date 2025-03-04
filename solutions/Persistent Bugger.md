# 📝 Persistent Bugger

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)

### 💡 Solution

```javascript
function persistence(num, count = 0) {
    if (num < 10) return count;
    const res = String(num).split('').reduce((acc, n) => acc * n, 1);
    return persistence(res, count + 1);
}
```
