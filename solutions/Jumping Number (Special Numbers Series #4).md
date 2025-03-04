# 📝 Jumping Number (Special Numbers Series #4)

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed)

### 💡 Solution

```javascript
function jumpingNumber(n) {
    if (n < 10) return 'Jumping!!';
    let strNum = String(n);

    for (let i = 1; i < strNum.length; i++) {
        if (Math.abs(strNum[i] - strNum[i - 1]) !== 1) return "Not!!";
    }

    return "Jumping!!";
}
```
