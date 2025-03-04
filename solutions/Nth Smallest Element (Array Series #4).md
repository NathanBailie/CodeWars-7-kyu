# 📝 Nth Smallest Element (Array Series #4)

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a512f6a80eba857280000fc)

### 💡 Solution

```javascript
const nthSmallest = (arr, pos) => arr.sort((a, b) => b - a)[arr.length - pos];
```
