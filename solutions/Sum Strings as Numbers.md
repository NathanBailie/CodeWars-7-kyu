# 📝 Sum Strings as Numbers

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5324945e2ece5e1f32000370)

### 💡 Solution

```javascript
function sumStrings(a, b) {
    let res = '', c = 0;
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || c > 0; i--, j--) {
        let n1 = i >= 0 ? +a[i] : 0;
        let n2 = j >= 0 ? +b[j] : 0;
        let sum = n1 + n2 + c;
        c = sum > 9 ? 1 : 0;
        res = (sum % 10) + res;
    }
    return res.replace(/^0+/, '');
}
```
