# 📝 Factorial decomposition

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a045fee46d843effa000070)

### 💡 Solution

```javascript
function decomp(n) {
    const res = {};

    for (let i = 2; i <= n; i++) {
        let num = i;
        for (let j = 2; j <= num; j++) {
            while (num % j === 0) {
                res[j] = (res[j] || 0) + 1;
                num /= j;
            }
        }
    }

    return Object.entries(res).map(([n, count]) => count > 1 ? `${n}^${count}` : n).join(' * ');
}
```
