# 📝 Spin Around, Touch the Ground

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/65127141a5de2b1dcb40927e)

### 💡 Solution

```javascript
const spinAround = t => Math.floor(Math.abs(t.reduce((sum, n) => sum + (n === 'left' ? -90 : 90), 0)) / 360);
```
