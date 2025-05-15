# 📝 Odd or Even

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5949481f86420f59480000e7)

### 💡 Solution

```javascript
const oddOrEven = arr => arr.reduce((acc, n) => acc + n, 0) % 2 === 0 ? 'even' : 'odd';
```
