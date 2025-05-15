# 📝 Is valid identifier

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/563a8656d52a79f06c00001f)

### 💡 Solution

```javascript
const isValid = idn => /^[a-z_$][a-z_$0-9]*$/gi.test(idn);
```
