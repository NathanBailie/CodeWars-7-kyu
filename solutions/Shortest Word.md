# 📝 Shortest Word

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9)

### 💡 Solution

```javascript
function findShort(s) {
    return s.split(" ").reduce((minLength, word) => {
        return Math.min(minLength, word.length);
    }, Infinity);
}
```
