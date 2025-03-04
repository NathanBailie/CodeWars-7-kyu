# 📝 Money, Money, Money

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/563f037412e5ada593000114)

### 💡 Solution

```javascript
function calculateYears(p, i, t, d) {
    let years = 0;

    while (p < d) {
        p += p * i * (1 - t);
        years++;
    }

    return years;
}
```
