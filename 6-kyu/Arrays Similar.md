# 📝 Arrays Similar

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/51e704f2d8dbace389000279)

### 💡 Solution

```javascript
function arraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const sort = arr => arr.sort((a, b) => a - b);
    return sort(arr1).every((elem, i) => elem === sort(arr2)[i]);
}
```
