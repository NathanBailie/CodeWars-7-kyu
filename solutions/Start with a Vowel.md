# 📝 Start with a Vowel

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a02e9c19f8e2dbd50000167)

### 💡 Solution

```javascript
const vowelStart = s => s.replace(/[^a-z\d]/gi, '').replace(/[aeiou]/gi, ' $&').trim().toLowerCase();
```
