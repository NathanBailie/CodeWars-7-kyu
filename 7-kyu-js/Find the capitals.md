# 📝 Find the capitals

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/539ee3b6757843632d00026b)

### 💡 Solution

```javascript
const capitals = w => [...w].reduce((acc, c, i) => { /[A-Z]/.test(c) && acc.push(+i); return acc; }, []);
```
