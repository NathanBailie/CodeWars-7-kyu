# 📝 Calculate String Rotation

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5596f6e9529e9ab6fb000014)

### 💡 Solution

```javascript
const shiftedDiff = (f, s) => f.length !== s.length ? -1 : (s + s).indexOf(f);
```
