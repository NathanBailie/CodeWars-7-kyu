# 📝 Coordinates Validator

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5269452810342858ec000951)

### 💡 Solution

```javascript
function isValidCoordinates(coordinates) {
    return /^(-?([0-8]?\d(\.\d+)?|90), -?((1[0-7]\d|\d{1,2})(\.\d+)?|180))$/.test(coordinates);
}
```
