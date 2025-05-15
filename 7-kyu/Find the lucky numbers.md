# 📝 Find the lucky numbers

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/580435ab150cca22650001fb)

### 💡 Solution

```javascript
const filterLucky = arr => arr.filter(n => hasSeven(n));

function hasSeven(num) {
    while (num > 0) {
        if (num % 10 === 7) return true;
        num = Math.floor(num / 10);
    }
    return false;
}
```
