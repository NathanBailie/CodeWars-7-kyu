# 📝 Find the middle element

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/545a4c5a61aa4c6916000755)

### 💡 Solution

```javascript
const gimme = arr => arr.indexOf([...arr].sort((a, b) => a - b)[1]);
```
