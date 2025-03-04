# 📝 Parts of a list

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56f3a1e899b386da78000732)

### 💡 Solution

```javascript
const partlist = arr => arr.flatMap((_, i) => i ? [[arr.slice(0, i).join(' '), arr.slice(i).join(' ')]] : []);
```
