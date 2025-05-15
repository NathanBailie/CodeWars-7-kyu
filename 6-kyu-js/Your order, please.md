# 📝 Your order, please

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/55c45be3b2079eccff00010f)

### 💡 Solution

```javascript
const order = words => words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
```
