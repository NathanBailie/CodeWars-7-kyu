# 📝 Growth of a Population

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/563b662a59afc2b5120000c6)

### 💡 Solution

```javascript
function nbYear(p0, percent, aug, p) {
    let count = 0;
    while (p0 < p) {
        p0 += p0 * (percent / 100) + aug;
        count++;
    }
    return count;
}
```
