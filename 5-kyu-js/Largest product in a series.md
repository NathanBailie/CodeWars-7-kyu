# 📝 Largest product in a series

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/529872bdd0f550a06b00026e)

### 💡 Solution

```javascript
function greatestProduct(str) {
    let max = 0;
    for (let i = 0; i <= str.length - 5; i++) {
        let num = str.slice(i, i + 5).split('').reduce((acc, n) => acc * (+n), 1);
        max = Math.max(max, num);
    }
    return max;
}
```
