# 📝 Nth power rules them all!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58aed2cafab8faca1d000e20)

### 💡 Solution

```javascript
const modifiedSum = (a, n) => a.reduce((acc, x) => acc + x ** n - x, 0);
```
