# 📝 Moving Zeros To The End

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52597aa56021e91c93000cb0)

### 💡 Solution

```javascript
const moveZeros = arr => arr.reduceRight((res, x) => x === 0 ? [...res, x] : [x, ...res], []);
```
