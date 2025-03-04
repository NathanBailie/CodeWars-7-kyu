# 📝 Find the unique number

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)

### 💡 Solution

```javascript
function findUniq(arr) {
    let uniqNums = [...new Set(arr)];
    let count = 0;
    for (let i = 0; i < 4; i++) arr[i] === uniqNums[0] && count++;
    return count > 1 ? uniqNums[1] : uniqNums[0]
}
```
