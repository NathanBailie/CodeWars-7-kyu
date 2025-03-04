# 📝 Password validator

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56a921fa8c5167d8e7000053)

### 💡 Solution

```javascript
const password = s => /(?:[a-z]){1,}/g.test(s) && /(?:[A-Z]){1,}/g.test(s) && /(?:[\d]){1,}/g.test(s) && s.length >= 8;
```
