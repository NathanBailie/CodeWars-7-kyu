# 📝 Regex validate PIN code

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/55f8a9c06c018a0d6e000132)

### 💡 Solution

```javascript
const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);
```
