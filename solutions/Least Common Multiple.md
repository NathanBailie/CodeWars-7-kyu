# 📝 Least Common Multiple

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5259acb16021e9d8a60010af)

### 💡 Solution

```javascript
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm = (...args) => args.reduce((acc, n) => acc * n / gcd(acc, n));
```
