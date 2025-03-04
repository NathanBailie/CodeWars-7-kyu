# 📝 Ordered Count of Characters

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57a6633153ba33189e000074)

### 💡 Solution

```javascript
function orderedCount(str) {
    const map = new Map();
    for (let char of str) map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
    return [...map]
}
```
