# 📝 Perimeter of squares in a rectangle

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/559a28007caad2ac4e000083)

### 💡 Solution

```javascript
function perimeter(n) {
    if (n === 0) return 4;
    let res = [1, 1], ind = 1;
    while (n -= 1) res.push(res[ind - 1] + res[ind]), ind++;
    return res.reduce((sum, n) => sum + n, 0) * 4;
}
```
