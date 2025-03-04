# 📝 Sort by Last Char

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0)

### 💡 Solution

```javascript
const last = str => str.split(' ').sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
```
