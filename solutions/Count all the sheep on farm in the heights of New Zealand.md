# 📝 Count all the sheep on farm in the heights of New Zealand

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010)

### 💡 Solution

```javascript
function lostSheep(f, s, t) {
    const getSum = arr => arr.reduce((acc, n) => acc + n, 0);
    return t - (getSum(f) + getSum(s));
}
```
