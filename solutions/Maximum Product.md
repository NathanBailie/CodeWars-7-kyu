# 📝 Maximum Product

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a4138acf28b82aa43000117)

### 💡 Solution

```javascript
function adjacentElementsProduct(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length - 1; i++) max = Math.max(max, arr[i] * arr[i + 1]);
    return max;
}
```
