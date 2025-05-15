# 📝 Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....__Eureka!!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5626b561280a42ecc50000d1)

### 💡 Solution

```javascript
function sumDigPow(a, b) {
    let inspect = n => n === [...String(n)].reduce((sum, n, i) => sum + n ** (i + 1), 0);
    let res = [];
    for (let i = a; i <= b; i++) inspect(i) && res.push(i);
    return res;
}
```
