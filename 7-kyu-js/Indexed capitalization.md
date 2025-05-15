# 📝 Indexed capitalization

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1)

### 💡 Solution

```javascript
const capitalize = (s, arr) => [...s].map((c, i) => arr.includes(i) ? c.toUpperCase() : c).join('');
```
