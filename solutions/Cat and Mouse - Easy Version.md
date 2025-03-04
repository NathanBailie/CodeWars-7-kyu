# 📝 Cat and Mouse - Easy Version

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57ee24e17b45eff6d6000164)

### 💡 Solution

```javascript
const catMouse = str => (str.match(/C(.){0,3}m/) ? 'Caught!' : 'Escaped!');
```
