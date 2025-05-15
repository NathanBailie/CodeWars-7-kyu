# 📝 Reverse words

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5259b20d6021e9e14c0010d4)

### 💡 Solution

```javascript
const reverseWords = str => str.split('').reverse().join('').split(' ').reverse().join(' ');
```
