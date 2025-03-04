# 📝 Sum of Digits or Digital Root

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/541c8630095125aba6000c00)

### 💡 Solution

```javascript
function digitalRoot(n) {
    const res = String(n).split('').reduce((sum, x) => sum + (+x), 0);
    return res > 9 ? digitalRoot(res) : res;
}
```
