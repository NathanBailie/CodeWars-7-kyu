# 📝 Return String of First Characters

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5639bdcef2f9b06ce800005b)

### 💡 Solution

```javascript
const makeString = s => s.replace(/(\w)\w*\s*/g, '$1');
```
