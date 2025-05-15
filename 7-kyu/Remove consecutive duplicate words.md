# 📝 Remove consecutive duplicate words

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5b39e91ee7a2c103300018b3)

### 💡 Solution

```javascript
const removeConsecutiveDuplicates = s => s.replace(/\b(\w+)(\s+\1)+\b/g, '$1');
```
