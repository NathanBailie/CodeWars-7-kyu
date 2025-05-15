# 📝 Kebabize

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57f8ff867a28db569e000c4a)

### 💡 Solution

```javascript
const kebabize = str => str.replace(/([A-Z])/g, c => `-${c.toLowerCase()}`).replace(/^\-/, '').replace(/\d/g, '');
```
