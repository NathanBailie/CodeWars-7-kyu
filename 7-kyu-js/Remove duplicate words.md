# 📝 Remove duplicate words

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5b39e3772ae7545f650000fc)

### 💡 Solution

```javascript
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');
```
