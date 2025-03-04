# 📝 Remove All The Marked Elements of a List

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/563089b9b7be03472d00002b)

### 💡 Solution

```javascript
Array.prototype.remove_ = (a1, a2) => a1.filter(n => !a2.includes(n));
```
