# 📝 Sort and Transform

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57cc847e58a06b1492000264)

### 💡 Solution

```javascript
function sortTransform(arr) {
    let first = convert(arr);
    let second = convert(arr.sort((a, b) => a - b));
    let third = convert(arr.sort((a, b) => b - a));
    function convert(a) { return [...a.slice(0, 2), ...a.slice(-2)].map(n => String.fromCharCode(n)).join('') };
    return `${first}-${second}-${third}-${second}`
}
```
