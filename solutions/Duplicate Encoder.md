# 📝 Duplicate Encoder

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c)

### 💡 Solution

```javascript
function duplicateEncode(word) {
    const arr = word.toLowerCase().split('');
    const counter = arr.reduce((obj, e) => { obj[e] ? obj[e] += 1 : obj[e] = 1; return obj; }, {});
    return arr.map(c => counter[c] === 1 ? '(' : ')').join('');
}
```
