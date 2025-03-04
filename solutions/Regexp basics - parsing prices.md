# 📝 Regexp basics - parsing prices

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56833b76371e86f8b6000015)

### 💡 Solution

```javascript
String.prototype.toCents = function () {
    return /^\$\d+\.\d{2}$/g.test(this) ? +(this.replace(/[$.]/g, '')) : null;
}
```
