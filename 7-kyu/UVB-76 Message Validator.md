# 📝 UVB-76 Message Validator

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56445cc2e5747d513c000033)

### 💡 Solution

```javascript
const validate = m => /^MDZHB \d\d \d{3} [A-Z]+ (\d\d\s?){4}$/g.test(m);
```
