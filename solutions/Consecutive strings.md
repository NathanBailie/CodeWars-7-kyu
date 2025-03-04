# 📝 Consecutive strings

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56a5d994ac971f1ac500003e)

### 💡 Solution

```javascript
function longestConsec(strarr, k) {
    if (strarr.length === 0 || k <= 0 || k > strarr.length) return '';
    let res = '', maxLength = 0;
    strarr.forEach((w, i, arr) => {
        let str = arr.slice(i, i + k).join('');
        if (str.length > maxLength) { maxLength = str.length; res = str; }
    });
    return res;
}
```
