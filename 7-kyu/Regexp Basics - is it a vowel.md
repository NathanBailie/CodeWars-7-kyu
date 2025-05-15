# 📝 Regexp Basics - is it a vowel

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/567bed99ee3451292c000025)

### 💡 Solution

```javascript
String.prototype.vowel = function () {
    return /^[aeiou]$/gi.test(this);
};
```
