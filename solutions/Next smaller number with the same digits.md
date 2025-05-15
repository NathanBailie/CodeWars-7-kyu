# 📝 Next smaller number with the same digits

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5659c6d896bc135c4c00021e)

### 💡 Solution

```javascript
function nextSmaller(n) {
    let arr = [...String(n)], div = -1;
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] < arr[i - 1]) { div = i - 1; break; }
    }
    if (div == -1) return -1;

    let rightPart = arr.splice(div);
    let c = rightPart.shift();
    rightPart.sort((a, b) => b - a);

    let numInd = rightPart.findIndex((x) => x < c);
    let num = numInd !== -1 ? rightPart[numInd] : null;
    if (numInd == -1) return -1;

    rightPart[numInd] = c;
    let res = +arr.concat(num, rightPart).join('');
    return res < n && String(res).length === String(n).length ? res : -1;
}
```
