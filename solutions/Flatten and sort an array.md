# 📝 Flatten and sort an array

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57ee99a16c8df7b02d00045f)

### 💡 Solution

```javascript
const flattenAndSort = arr => arr.reduce((acc, x) => acc.concat(x), []).sort((a, b) => a - b);
```
