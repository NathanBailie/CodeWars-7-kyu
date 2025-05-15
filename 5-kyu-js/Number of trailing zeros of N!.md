# 📝 Number of trailing zeros of N!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52f787eb172a8b4ae1000a34)

### 💡 Solution

```javascript
const zeros = n => n < 5 ? 0 : Math.floor(n / 5) + zeros(Math.floor(n / 5));
```
