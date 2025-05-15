# 📝 Sequences and Series

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5254bd1357d59fbbe90001ec)

### 💡 Solution

```javascript
function getScore(n, i = 1, r = 0) {
    if (i > n) return r;
    return getScore(n, i + 1, r + i * 50);
}

function getScore(n) {
    let res = 0;
    for (let i = 1; i <= n; i++) res += i * 50;
    return res;
}
```
