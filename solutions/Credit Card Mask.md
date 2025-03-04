# 📝 Credit Card Mask

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5412509bd436bd33920011bc)

### 💡 Solution

```javascript
const maskify = str => str.slice(0, -4).replace(/./g, '#') + str.slice(-4);
```
