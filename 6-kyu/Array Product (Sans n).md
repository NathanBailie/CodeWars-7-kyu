# 📝 Array Product (Sans n)

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5b3e609cd58499284100007a)

### 💡 Solution

```javascript
function productSansN(arr) {
    let zeros = 0;
    let total = 1n;
    for (let num of arr) { num === 0 ? zeros++ : total *= BigInt(num) }
    return arr.map(n => zeros === 0 ? total / BigInt(n) : (zeros === 1 && n === 0 ? total : 0n));
}
```
