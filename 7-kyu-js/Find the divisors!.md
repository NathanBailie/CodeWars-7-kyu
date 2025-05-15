# 📝 Find the divisors!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/544aed4c4a30184e960010f4)

### 💡 Solution

```javascript
function divisors(int) {
    let res = [];
    for (let i = 2; i < int; i++) int % i === 0 && res.push(i);
    return res.length === 0 ? `${int} is prime` : res;
};
```
