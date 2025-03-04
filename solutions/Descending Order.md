# 📝 Descending Order

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5467e4d82edf8bbf40000155)

### 💡 Solution

```javascript
function descendingOrder(n) {
    return +(String(n).split('').sort().reverse().join(''));
}
```
