# 📝 Convert string to camel case

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/517abf86da9663f1d2000003)

### 💡 Solution

```javascript
const toCamelCase = (str) => str.replace(/[_-](.)/g, (_, l) => l.toUpperCase());
```
