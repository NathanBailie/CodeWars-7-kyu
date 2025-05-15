# 📝 Wordsearch

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5545f847bd94d050be00011d)

### 💡 Solution

```javascript
const wordSearch = (word, text) => new RegExp(`\\b${word}\\b`, 'gi').test(text);
```
