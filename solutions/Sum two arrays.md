# 📝 Sum two arrays

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6)

### 💡 Solution

```javascript
function addArrays(a1, a2) {
    let sum = (+a1.join('') || []) + (+a2.join('') || [])
    let res = [...String(sum)];
    if (res[0] === '-') { res.shift(); res[0] *= -1; }
    return res.map(Number)
}
```
