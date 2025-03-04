# 📝 String incrementer

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/54a91a4883a7de5d7800009c)

### 💡 Solution

```javascript
const incrementString = s => s.replace(/([0-8]|\d?9+)?$/, (n) => n ? (+n) + 1 : 1);
```
