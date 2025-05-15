# 📝 Valid Spacing

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5f77d62851f6bc0033616bd8)

### 💡 Solution

```javascript
const validSpacing = s => !/\s{2}/g.test(s) && (s.trim() === s);
```
