# 📝 Simple Fun #166_ Best Match

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58b38256e51f1c2af0000081)

### 💡 Solution

```javascript
function bestMatch(a, z) {
    let bestMatchInd = 0, minDiff = a[0] - z[0], maxDiff = z[0];
    for (let i = 1; i < a.length; i++) {
        const diff = a[i] - z[i];
        if (diff < minDiff || (diff === minDiff && z[i] > maxDiff)) {
            bestMatchInd = i;
            minDiff = diff;
            maxDiff = z[i];
        }
    }
    return bestMatchInd;
}
```
