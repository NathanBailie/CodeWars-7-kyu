# 📝 Build a pile of Cubes

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5592e3bd57b64d00f3000047)

### 💡 Solution

```javascript
function findNb(m) {
    let n = 0, sum = 0;
    while (sum < m) { n++; sum += Math.pow(n, 3); }
    return sum === m ? n : -1;
}
```
