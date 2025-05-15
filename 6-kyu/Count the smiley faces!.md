# 📝 Count the smiley faces!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/583203e6eb35d7980400002a)

### 💡 Solution

```javascript
const countSmileys = arr => arr.reduce((sum, face) => /[:;][-~]?[\)D]/.test(face) ? ++sum : sum, 0);
```
