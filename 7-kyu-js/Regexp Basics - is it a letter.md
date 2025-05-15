# 📝 Regexp Basics - is it a letter

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/567de72e8b3621b3c300000b)

### 💡 Solution

```javascript
String.prototype.isLetter = function () {
    return /^[a-zA-Z]$/.test(this);
};
```
