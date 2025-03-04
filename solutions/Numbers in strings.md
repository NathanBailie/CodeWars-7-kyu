# 📝 Numbers in strings

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59dd2c38f703c4ae5e000014)

### 💡 Solution

```javascript
const solve = s => Math.max(...s.match(/\d+/g));
```
