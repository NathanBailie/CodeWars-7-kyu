# 📝 Dropcaps

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/559e5b717dd758a3eb00005a)

### 💡 Solution

```javascript
const dropCap = n => n.split(' ').map(w => w.length <= 2 ? w : w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
```
