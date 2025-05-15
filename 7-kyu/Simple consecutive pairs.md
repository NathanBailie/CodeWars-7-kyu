# 📝 Simple consecutive pairs

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a3e1319b6486ac96f000049)

### 💡 Solution

```javascript
function pairs(arr) {
    let count = 0;
    arr.forEach((n, i) => (i % 2 === 0 && arr[i + 1] !== undefined && Math.abs(n - arr[i + 1]) === 1) && count++);
    return count;
}
```
