# 📝 Autocomplete! Yay!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5389864ec72ce03383000484)

### 💡 Solution

```javascript
const autocomplete = (i, d) => d.filter(w => new RegExp(`^${i.replace(/[^a-zA-Z]/g, '')}`, 'i').test(w)).slice(0, 5);
```
