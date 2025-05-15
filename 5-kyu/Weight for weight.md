# 📝 Weight for weight

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/55c6126177c9441a570000cc)

### 💡 Solution

```javascript
function orderWeight(str) {
    const sum = s => s.split('').reduce((sum, n) => sum + (+n), 0);
    return str.split(' ').sort((a, b) => sum(a) !== sum(b) ? sum(a) - sum(b) : a.localeCompare(b)).join(' ');
};
```
