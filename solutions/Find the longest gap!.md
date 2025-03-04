# 📝 Find the longest gap!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/55b86beb1417eab500000051)

### 💡 Solution

```javascript
function gap(num) {
    const matches = num.toString(2).replace(/0+$/, '').split('1');
    return Math.max(...matches.map(n => n.length));
}
```
