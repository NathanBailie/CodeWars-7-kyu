# 📝 RGB To Hex Conversion

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/513e08acc600c94f01000001)

### 💡 Solution

```javascript
function rgb(r, g, b) {
    const convert = (n) => {
        let hex = Math.max(0, Math.min(255, n)).toString(16).toUpperCase();
        return hex.length === 1 ? `0${hex}` : hex;
    };
    return `${convert(r)}${convert(g)}${convert(b)}`;
}
```
