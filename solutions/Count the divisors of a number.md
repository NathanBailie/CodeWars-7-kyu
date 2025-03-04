# 📝 Count the divisors of a number

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/542c0f198e077084c0000c2e)

### 💡 Solution

```javascript
function getDivisorsCnt(n) {
    let set = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
        n % i === 0 && (set.add(i), set.add(n / i));
    }
    return set.size;
}
```
