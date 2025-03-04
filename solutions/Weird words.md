# 📝 Weird words

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57b2020eb69bfcbf64000375)

### 💡 Solution

```javascript
const nextLetter = s => s.replace(/[a-z]/gi, c => c === 'z' ? 'a' : (c === 'Z' ? 'A' : String.fromCharCode(c.charCodeAt() + 1)));
```
