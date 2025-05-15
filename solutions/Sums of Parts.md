# 📝 Sums of Parts

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5ce399e0047a45001c853c2b)

### 💡 Solution

```javascript
function partsSums(arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0), res = [sum];
    for (let i = 0; i < arr.length; i++) { sum -= arr[i]; res.push(sum); }
    return res;
}
```
