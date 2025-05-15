# 📝 Pyramid Array

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/515f51d438015969f7000013)

### 💡 Solution

```javascript
const pyramid = n => Array.from({ length: n }, (_, i) => Array(i + 1).fill(1));
```
