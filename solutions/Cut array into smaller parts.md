# 📝 Cut array into smaller parts

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150)

### 💡 Solution

```javascript
const makeParts = (arr, s) => Array.from({ length: Math.ceil(arr.length / s) }, (_, i) => arr.slice(i * s, (i + 1) * s));
```
