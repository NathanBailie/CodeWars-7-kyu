# 📝 Convert PascalCase string into snake_case

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/529b418d533b76924600085d)

### 💡 Solution

```javascript
const toUnderscore = s => String(s).match(/[A-Z]?[a-z\d]+/g).join('_').toLowerCase();
```
