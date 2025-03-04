# 📝 Maximum Contiguous Sum

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52f4261c95d6bff39a003096)

### 💡 Solution

```javascript
function maxContiguousSum(arr) {
    let max = 0, localSum = 0;
    arr.forEach(n => {
        localSum = Math.max(0, localSum + n);
        max = Math.max(max, localSum);
    })
    return max;
}
```
