# 📝 Help the Fruit Guy

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/557af4c6169ac832300000ba)

### 💡 Solution

```javascript
const removeRotten = arr => !arr ? [] : arr.map(f => f.replace(/rotten/g, '').toLowerCase());
```
