# 📝 Interleaving Arrays

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/523d2e964680d1f749000135)

### 💡 Solution

```javascript
function interleave(...arrs) {
    const l = Math.max(...arrs.map(a => a.length));
    return Array.from({ length: l }, (_, i) => arrs.flatMap(a => a[i] ?? null)).flat();
}
```
