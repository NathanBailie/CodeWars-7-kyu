# 📝 Two to One

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5656b6906de340bd1b0000ac)

### 💡 Solution

```javascript
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');
```
