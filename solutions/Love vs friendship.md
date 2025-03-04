# 📝 Love vs friendship

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59706036f6e5d1e22d000016)

### 💡 Solution

```javascript
const wordsToMarks = s => [...s].reduce((sum, c) => sum + c.charCodeAt() - 96, 0);
```
