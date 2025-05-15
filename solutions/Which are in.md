# 📝 Which are in

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/550554fd08b86f84fe000a58)

### 💡 Solution

```javascript
const inArray = (arr1, arr2) => arr1.filter(e => new RegExp(e, 'gi').test(arr2.join(' '))).sort();
```
