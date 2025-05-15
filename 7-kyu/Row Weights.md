# 📝 Row Weights

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9)

### 💡 Solution

```javascript
function rowWeights(arr) {
    let t1 = 0, t2 = 0;
    arr.forEach((n, i) => i % 2 === 0 ? t1 += n : t2 += n);
    return [t1, t2];
}
```
