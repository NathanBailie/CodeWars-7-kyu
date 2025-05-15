# 📝 Form The Minimum

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5ac6932b2f317b96980000ca)

### 💡 Solution

```javascript
function minValue(nums) {
    let uniqNums = [...new Set(nums)].sort((a, b) => a - b);
    return parseInt(uniqNums.join(''));;
}
```
