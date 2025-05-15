# 📝 Counting Duplicates

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1)

### 💡 Solution

```javascript
function duplicateCount(str) {
    return new Set(str.toLowerCase().split('').filter((n, i, arr) => arr.indexOf(n) !== i && arr.lastIndexOf(n) === i)).size;
}
```
