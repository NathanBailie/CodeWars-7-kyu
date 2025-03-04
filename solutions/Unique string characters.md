# 📝 Unique string characters

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a262cfb8f27f217f700000b)

### 💡 Solution

```javascript
function solve(a, b) {
    const getUniqChars = (a, b) => [...a].filter(c => !b.includes(c)).join('');
    return getUniqChars(a, b) + getUniqChars(b, a);
}
```
