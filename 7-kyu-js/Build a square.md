# 📝 Build a square

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59a96d71dbe3b06c0200009c)

### 💡 Solution

```javascript
const generateShape = n =>
	Array.from({ length: n }, () => '+'.repeat(n)).join('\n');
```
