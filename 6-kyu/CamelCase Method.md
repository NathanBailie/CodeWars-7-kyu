# 📝 CamelCase Method

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/587731fda577b3d1b0001196)

### 💡 Solution

```javascript
String.prototype.camelCase = function () {
    return this.split(' ').map(w => w.replace(/^./, c => c.toUpperCase())).join('');
}
```
