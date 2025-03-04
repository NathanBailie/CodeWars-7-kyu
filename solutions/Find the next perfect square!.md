# 📝 Find the next perfect square!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56269eb78ad2e4ced1000013)

### 💡 Solution

```javascript
function findNextSquare(n) {
    let sq = Math.sqrt(n);
    return sq % 1 === 0 ? Math.pow(sq + 1, 2) : -1;
}
```
