# 📝 Sum of two lowest positive integers

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/558fc85d8fd1938afb000014)

### 💡 Solution

```javascript
function sumTwoSmallestNumbers(nums) {
    const sortedArr = nums.sort((a, b) => a - b);
    return sortedArr[0] + sortedArr[1];
}
```
