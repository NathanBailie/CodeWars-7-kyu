# 📝 Maximum Triplet Sum (Array Series #7)

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5aa1bcda373c2eb596000112)

### 💡 Solution

```javascript
const maxTriSum = arr => [...new Set(arr)].sort((a, b) => b - a).slice(0, 3).reduce((acc, n) => acc + n, 0);
```
