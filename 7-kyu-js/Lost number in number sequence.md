# 📝 Lost number in number sequence

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/595aa94353e43a8746000120)

### 💡 Solution

```javascript
const findDeletedNumber = (arr, mixArr) => arr.find(n => !mixArr.includes(n)) || 0;
```
