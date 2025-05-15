# 📝 Rot13

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/530e15517bc88ac656000716)

### 💡 Solution

```javascript
const rot13 = (msg) => msg.replace(/[a-z]/gi, l => String.fromCharCode(l.charCodeAt() + (l.toLowerCase().charCodeAt() <= 109 ? 13 : -13)));
```
