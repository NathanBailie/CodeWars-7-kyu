# 📝 Remove B M W

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59de795c289ef9197f000c48)

### 💡 Solution

```javascript
const removeBMW = str => typeof str === 'string' ? str.replace(/[bmw]/gi, '') : 'This program only works for text.';
```
