# 📝 Pete, the baker

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/525c65e51bf619685c000059)

### 💡 Solution

```javascript
const cakes = (rec, have) => Math.min(...Object.keys(rec).map(ingr => Math.floor((have[ingr] || 0) / rec[ingr])));
```
