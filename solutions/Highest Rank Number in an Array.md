# 📝 Highest Rank Number in an Array

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004)

### 💡 Solution

```javascript
function highestRank(arr) {
    const counter = arr.reduce((obj, n) => { obj[n] ? obj[n] += 1 : obj[n] = 1; return obj }, {});
    let maxN = 0, maxFr = 0;
    for (let key in counter) {
        counter[key] > maxFr && (maxN = key, maxFr = counter[key]);
        counter[key] === maxFr && (maxN = Math.max(maxN, key));
    }
    return maxN;
}
```
