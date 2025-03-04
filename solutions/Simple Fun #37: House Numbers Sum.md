# 📝 Simple Fun #37: House Numbers Sum

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58880c6e79a0a3e459000004)

### 💡 Solution

```javascript
function houseNumbersSum(arr) {
    let sum = 0;
    for (let n of arr) {
        if (n === 0) return sum;
        sum += n;
    }
}
```
