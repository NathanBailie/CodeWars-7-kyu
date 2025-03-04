# 📝 My Language Skills

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5b16490986b6d336c900007d)

### 💡 Solution

```javascript
const myLanguages = r => Object.entries(r).filter(l => l[1] >= 60).sort((a, b) => b[1] - a[1]).flatMap(w => w[0]);
```
