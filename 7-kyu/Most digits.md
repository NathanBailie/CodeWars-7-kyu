# 📝 Most digits

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58daa7617332e59593000006)

### 💡 Solution

```javascript
const findLongest = arr => arr.reduce((acc, n) => String(acc).length >= String(n).length ? acc : n);
```
