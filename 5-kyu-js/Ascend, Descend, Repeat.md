# 📝 Ascend, Descend, Repeat

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/62ca07aaedc75c88fb95ee2f)

### 💡 Solution

```javascript
function ascendDescend(l, min, max) {
    if (max < min || l === 0) return '';
    let res = '', c = min, raise = true;
    while (res.length < l) {
        res += c;
        min !== max && (raise ? c++ : c--);
        c === min && !raise && (raise = true);
        c === max && raise && (raise = false);
    }
    if (res.length > l) res = res.slice(0, -Math.abs(l - res.length));
    return res;
}
```
