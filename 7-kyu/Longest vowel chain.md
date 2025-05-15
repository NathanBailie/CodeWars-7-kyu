# 📝 Longest vowel chain

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59c5f4e9d751df43cf000035)

### 💡 Solution

```javascript
const solve = s => Math.max(...s.match(/[aeiou]+/g).map(c => c.length));
```
