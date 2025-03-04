# 📝 max diff - easy

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095)

### 💡 Solution

```javascript
function maxDiff(arr) {
    if (arr.length === 0) return 0;
    let min = arr[0], max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i])
        max = Math.max(max, arr[i])
    }
    return max - min;
};
```
