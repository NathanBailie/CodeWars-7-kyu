# 📝 Math Issues

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5267faf57526ea542e0007fb/javascript)

### 💡 Solution

```javascript
Math.round = n => Math.floor(n + 0.5);
Math.ceil = n => Math.floor(n) === n ? n : Math.floor(n) + 1;
Math.floor = n => Math.trunc(n);
```
