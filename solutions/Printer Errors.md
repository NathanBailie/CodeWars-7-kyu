# 📝 Printer Errors

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56541980fa08ab47a0000040)

### 💡 Solution

```javascript
const printerError = s => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;
```
