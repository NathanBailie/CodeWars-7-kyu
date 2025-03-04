# 📝 Digits explosion

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/585b1fafe08bae9988000314)

### 💡 Solution

```javascript
const explode = s => s.split('').map(n => n.repeat(n)).join('');
```
