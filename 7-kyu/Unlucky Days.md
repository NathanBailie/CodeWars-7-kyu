# 📝 Unlucky Days

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56eb0be52caf798c630013c0)

### 💡 Solution

```javascript
function unluckyDays(year) {
    let count = 0, month = 0;

    while (month < 12) {
        new Date(year, month, 13).getDay() === 5 && count++;
        month++;
    }

    return count;
}
```
