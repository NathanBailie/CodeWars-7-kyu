# 📝 Stop gninnipS My sdroW!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5264d2b162488dc400000001)

### 💡 Solution

```javascript
const spinWords = (s) => s.split(' ').map((w) => w.length >= 5 ? [...w].reverse().join('') : w).join(' ');
```
