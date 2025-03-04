# 📝 Split Strings

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/515de9ae9dcfc28eb6000001)

### 💡 Solution

```javascript
const solution = (s) => Array.from(s.matchAll(/(..?)/g), n => n[1]).map((c) => c.length === 2 ? c : `${c}_`);
```
