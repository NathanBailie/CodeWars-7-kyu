# 📝 Matrix Addition

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/526233aefd4764272800036f)

### 💡 Solution

```javascript
const matrixAddition = (a, b) => a.map((n, i) => n.map((e, j) => e + b[i][j]));
```
