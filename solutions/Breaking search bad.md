# 📝 Breaking search bad

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52cd53948d673a6e66000576)

### 💡 Solution

```javascript
const search = s => TITLES.filter(t => new RegExp(s, 'i').test(t));
```
