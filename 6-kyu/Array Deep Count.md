# 📝 Array Deep Count

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/596f72bbe7cd7296d1000029)

### 💡 Solution

```javascript
const deepCount = arr => arr.reduce((sum, n) => sum + (Array.isArray(n) ? deepCount(n) : 0), arr.length);
```
