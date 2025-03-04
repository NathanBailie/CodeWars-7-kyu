# 📝 Debug Sum of Digits of a Number

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/563d59dd8e47a5ed220000ba)

### 💡 Solution

```javascript
const getSumOfDigits = n => [...String(n)].reduce((sum, n) => sum += +n, 0);
```
