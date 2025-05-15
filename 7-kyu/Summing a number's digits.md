# 📝 Summing a number's digits

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52f3149496de55aded000410)

### 💡 Solution

```javascript
const sumDigits = n => [...String(Math.abs(n))].reduce((sum, n) => sum + (+n), 0);
```
