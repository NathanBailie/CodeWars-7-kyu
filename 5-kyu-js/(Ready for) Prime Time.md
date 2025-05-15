# 📝 (Ready for) Prime Time

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/521ef596c106a935c0000519)

### 💡 Solution

```javascript
function prime(num) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
        return true;
    }
    let res = [];
    for (let i = 2; i <= num; i++) isPrime(i) && res.push(i);
    return res;
}
```
