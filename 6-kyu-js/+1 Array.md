# 📝 +1 Array

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9)

### 💡 Solution

```javascript
function upArray(arr) {
    if (arr.length === 0 || !arr.every(num => Number.isInteger(num) && num >= 0 && num < 10)) return null;
    let one = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] + one === 10 ? (one = 1, arr[i] = 0) : (arr[i] += one, one = 0);
        (i === 0 && one === 1) && arr.unshift(1);
    }
    return arr;
}
```
