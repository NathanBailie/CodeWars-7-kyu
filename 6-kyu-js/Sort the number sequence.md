# 📝 Sort the number sequence

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5816b76988ca9613cc00024f)

### 💡 Solution

```javascript
function sortSequence(arr) {
    const getSum = arr => arr.reduce((sum, n) => sum + n, 0);
    let subArr = [], res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            res.push(subArr);
            subArr = [];
            continue;
        }
        subArr.push(arr[i]);
    };
    return res.map(a => a.sort((a, b) => a - b).concat(0)).sort((a, b) => getSum(a) - getSum(b)).flat();
}
```
