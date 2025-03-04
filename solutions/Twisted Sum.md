# 📝 Twisted Sum

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f)

### 💡 Solution

```javascript
function twistedSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += [...String(i)].reduce((acc, n) => acc + +(n), 0);
    }
    return sum;
}
```
