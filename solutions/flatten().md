# 📝 flatten()

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/513fa1d75e4297ba38000003)

### 💡 Solution

```javascript
const flatten = (...args) => args.reduce((acc, n) => acc.concat(Array.isArray(n) ? flatten(...n) : n), []);
```
