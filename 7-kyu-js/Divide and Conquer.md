# 📝 Divide and Conquer

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57eaec5608fed543d6000021)

### 💡 Solution

```javascript
const divCon = x => x.reduce((acc, n) => acc + (typeof n === 'number' ? n : -(+n)), 0);
```
