# 📝 Speed Control

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56484848ba95170a8000004d)

### 💡 Solution

```javascript
function gps(s, x) {
    let max = 0;
    x.forEach((n, i, arr) => i > 0 && (max = Math.max(max, Math.floor((3600 * (n - arr[i - 1])) / s))));
    return max;
}
```
