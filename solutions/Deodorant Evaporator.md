# 📝 Deodorant Evaporator

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5506b230a11c0aeab3000c1f)

### 💡 Solution

```javascript
function evaporator(c, e, t) {
    let thresholdValue = c * t / 100, days = 0;
    while (c > thresholdValue) {
        c -= c * (e / 100);
        days++;
    }

    return days;
}
```
