# 📝 Even numbers in an array

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c)

### 💡 Solution

```javascript
const evenNumbers = (arr, n) => arr.filter(num => num % 2 === 0).slice(-n);
```
