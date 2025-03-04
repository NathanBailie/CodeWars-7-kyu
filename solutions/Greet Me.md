# 📝 Greet Me

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/535474308bb336c9980006f2)

### 💡 Solution

```javascript
const greet = name => `Hello ${name.toLowerCase().replace(/\w/, c => c.toUpperCase())}!`;
```
