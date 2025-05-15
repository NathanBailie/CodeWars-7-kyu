# 📝 Trim a String

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/526e8de0512511429e000006)

### 💡 Solution

```javascript
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
};
```
