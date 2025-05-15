# 📝 String subpattern recognition I

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a49f074b3bfa89b4c00002b)

### 💡 Solution

```javascript
const hasSubpattern = str => /^(\w+)\1+$/.test(str);
```
