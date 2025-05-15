# 📝 Simple Fun #176: Reverse Letter

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58b8c94b7df3f116eb00005b)

### 💡 Solution

```javascript
const reverseLetter = str => [...str.replace(/[^a-z]/g, '')].reverse().join('');
```
