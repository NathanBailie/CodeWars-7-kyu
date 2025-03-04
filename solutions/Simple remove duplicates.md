# 📝 Simple remove duplicates

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5ba38ba180824a86850000f7)

### 💡 Solution

```javascript
const solve = arr => [...new Set(arr.reverse())].reverse();
```
