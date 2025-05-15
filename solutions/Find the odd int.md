# 📝 Find the odd int

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/54da5a58ea159efa38000836)

### 💡 Solution

```javascript
const findOdd = (arr) => arr.reduce((res, num) => res ^ num, 0);
```
