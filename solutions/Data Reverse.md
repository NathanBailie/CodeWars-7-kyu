# 📝 Data Reverse

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/569d488d61b812a0f7000015)

### 💡 Solution

```javascript
function dataReverse(data) {
    let res = [];
    for (let i = 0; i < data.length; i += 8) res.push(data.slice(i, i + 8));
    return res.reverse().flat();
}
```
