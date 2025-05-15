# 📝 Dashatize it

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58223370aef9fc03fd000071)

### 💡 Solution

```javascript
const dashatize = n => String(n).replace(/([13579])/g, "-$1-").replace(/--/g, "-").replace(/^-|-$/g, '');
```
