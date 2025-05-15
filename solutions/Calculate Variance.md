# 📝 Calculate Variance

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5266fba01283974e720000fa)

### 💡 Solution

```javascript
function variance(arr) {
    let av = arr.reduce((sum, n) => sum + n, 0) / arr.length;
    return arr.reduce((sum, n) => sum + (n - av) ** 2, 0) / arr.length;
};
```
