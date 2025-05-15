# 📝 Maximum Gap (Array Series #4)

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a7893ef0025e9eb50000013)

### 💡 Solution

```javascript
function maxGap(arr) {
    arr.sort((a, b) => a - b);
    let maxDiff = 0;

    for (let i = 1; i < arr.length; i++) {
        maxDiff = Math.max(maxDiff, Math.abs(arr[i] - arr[i - 1]));
    }

    return maxDiff;
}
```
