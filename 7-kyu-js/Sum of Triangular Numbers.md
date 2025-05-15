# 📝 Sum of Triangular Numbers

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/580878d5d27b84b64c000b51)

### 💡 Solution

```javascript
const sumTriangularNumbers = n => n <= 0 ? 0 : n * (n + 1) * (n + 2) / 6;
```
