# 📝 Regexp Basics - is it all whitespace

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/567de8823fa5eee02100002a)

### 💡 Solution

```javascript
String.prototype.whitespace = function () {
    return /^\s*$/g.test(this);
}
```
