# 📝 Array.isArray

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/525a4cab1650d76b8000084d)

### 💡 Solution

```javascript
const isArray = arr => Object.prototype.toString.call(arr) === '[object Array]';
```
