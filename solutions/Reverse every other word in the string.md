# 📝 Reverse every other word in the string

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript)

### 💡 Solution

```javascript
const reverse = str => str.trim().split(' ').map((w, i) => i % 2 === 0 ? w : w.split('').reverse().join('')).join(' ');
```
