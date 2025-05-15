# 📝 Validate my Password

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59c01248bf10a47bd1000046)

### 💡 Solution

```javascript
const validPass = p => p.length > 3 && p.length < 20 && /[a-z]/i.test(p) && /\d/.test(p) && /^\w+$/.test(p) ? "VALID" : "INVALID";
```
