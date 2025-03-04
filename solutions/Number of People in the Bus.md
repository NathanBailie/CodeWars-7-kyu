# 📝 Number of People in the Bus

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5648b12ce68d9daa6b000099)

### 💡 Solution

```javascript
const number = arr => arr.reduce((acc, [e, q]) => acc + e - q, 0);
```
