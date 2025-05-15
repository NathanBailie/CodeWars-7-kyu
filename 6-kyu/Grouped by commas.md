# 📝 Grouped by commas

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5274e122fc75c0943d000148)

### 💡 Solution

```javascript
const groupByCommas = n => String(n).replace(/\B(?=(\d{3})+($|^\d))/g, ',');
```
