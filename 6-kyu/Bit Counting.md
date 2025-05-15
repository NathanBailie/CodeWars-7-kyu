# 📝 Bit Counting

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/526571aae218b8ee490006f4)

### 💡 Solution

```javascript
const countBits = n => n.toString(2).split('').reduce((sum, x) => sum += +x, 0);
```
