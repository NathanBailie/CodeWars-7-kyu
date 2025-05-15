# 📝 Simple Fun #206_ Factorial Digits

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58fea5baf3dff03a6e000102)

### 💡 Solution

```javascript
function factDigits(n) {
    if (n <= 1) return 1;
    let count = 0;
    for (let i = 2; i <= n; i++) count += Math.log10(i);
    return Math.floor(count) + 1;
}
```
