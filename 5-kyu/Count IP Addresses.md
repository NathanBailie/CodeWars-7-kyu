# 📝 Count IP Addresses

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/526989a41034285187000de4)

### 💡 Solution

```javascript
function ipsBetween(start, end) {
    const ipToNumber = ip => ip.split('.').reduce((acc, n, i) => acc + (+n) * (256 ** (3 - i)), 0);
    return ipToNumber(end) - ipToNumber(start);
}
```
