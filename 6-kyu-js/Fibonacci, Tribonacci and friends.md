# 📝 Fibonacci, Tribonacci and friends

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/556e0fccc392c527f20000c5)

### 💡 Solution

```javascript
function Xbonacci(arr, n) {
    if (arr.length > n) return arr.slice(0, n);
    let res = [...arr];
    for (let i = 0; res.length < n; i++) res.push(res.slice(-arr.length).reduce((sum, n) => sum + n, 0));
    return res;
}
```
