# 📝 Find the Word Pair!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5aaae0f5fd8c069e8c00016e)

### 💡 Solution

```javascript
function compoundMatch(arr, t) {
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        if (t.includes(curr)) {
            if (hash[curr] !== undefined) {
                let i1 = hash[curr], i2 = i;
                let indexes = hash[curr][0] + curr === t ? [i1[1], i2] : [i2, i1[1]];
                return [hash[curr][0], curr, indexes];
            }
            hash[t.replace(new RegExp(curr, 'gi'), '')] = [curr, i];
        }
    };
    return null;
}
```
