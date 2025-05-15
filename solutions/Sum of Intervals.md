# 📝 Sum of Intervals

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52b7ed099cdc285c300001cd)

### 💡 Solution

```javascript
function sumIntervals(arr) {
    arr.sort((a, b) => a[0] - b[0]);
    let res = 0;
    let [a, b] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let [x, y] = arr[i];
        x <= b ? b = Math.max(b, y) : (res += b - a, [a, b] = [x, y])
    }
    res += b - a;
    return res;
}
```
