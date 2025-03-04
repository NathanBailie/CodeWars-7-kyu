# 📝 English beggars

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59590976838112bfea0000fa)

### 💡 Solution

```javascript
function beggars(v, n) {
    let res = Array(n).fill(0);
    for (let i = 0; i < v.length; i++) res[i % n] += v[i];
    return res;
}
```
