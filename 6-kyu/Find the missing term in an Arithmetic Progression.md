# 📝 Find the missing term in an Arithmetic Progression

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52de553ebb55d1fca3000371)

### 💡 Solution

```javascript
const findMissing = arr => (arr.length + 1) / 2 * (arr[0] + arr[arr.length - 1]) - arr.reduce((sum, n) => sum + n, 0);
```
