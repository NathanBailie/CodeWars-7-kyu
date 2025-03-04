# 📝 Complete The Pattern #1

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5572f7c346eb58ae9c000047)

### 💡 Solution

```javascript
const pattern = n => Array.from({ length: n }, (_, i) => String(i + 1).repeat(i + 1)).join('\n');
```
