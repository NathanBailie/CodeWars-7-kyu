# 📝 Square Every Digit

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/546e2562b03326a88e000020)

### 💡 Solution

```javascript
const squareDigits = num => +[...String(num)].map(x => x ** 2).join('');
```
