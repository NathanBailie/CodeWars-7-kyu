# 📝 Getting the Minimum Absolute Difference

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/593a061b942a27ac940000a7)

### 💡 Solution

```javascript
function gettingMad(arr) {
    arr.sort((a, b) => a - b);
    return Math.min(...arr.slice(1).map((n, i) => n - arr[i]));
}
```
