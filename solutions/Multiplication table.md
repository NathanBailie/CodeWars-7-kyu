# 📝 Multiplication table

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08)

### 💡 Solution

```javascript
const multiplicationTable = n => Array(n).fill().map((_, i) => Array(n).fill().map((_, j) => (i + 1) * (j + 1)));
```
