# 📝 Sort Out The Men From Boys

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5af15a37de4c7f223e00012d)

### 💡 Solution

```javascript
function menFromBoys(arr) {
    const even = arr.filter(n => n % 2 === 0).sort((a, b) => a - b);
    const odd = arr.filter(n => n % 2 !== 0).sort((a, b) => b - a);
    return [...new Set([...even, ...odd])];
}
```
