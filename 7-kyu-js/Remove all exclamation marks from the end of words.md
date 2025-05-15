# 📝 Remove all exclamation marks from the end of words

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57faf32df815ebd49e000117)

### 💡 Solution

```javascript
const remove = str => str.replace(/(!*\w+)!*/g, '$1');
```
