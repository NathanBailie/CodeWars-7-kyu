# 📝 Return the first M multiples of N

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/593c9175933500f33400003e)

### 💡 Solution

```javascript
const multiples = (m, n) => Array.from({ length: m }, (_, i) => n * (i + 1));
```
