# 📝 Fix My Phone Numbers!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/596343a24489a8b2a00000a2)

### 💡 Solution

```javascript
function isItANum(str) {
    const num = str.replace(/[^\d]/gi, '');
    return num.length === 11 && num[0] == 0 ? num : 'Not a phone number';
}
```
