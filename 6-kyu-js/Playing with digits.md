# 📝 Playing with digits

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5552101f47fc5178b1000050)

### 💡 Solution

```javascript
function digPow(n, p) {
    const num = [...String(n)].map((x, i) => x ** (p + i)).reduce((sum, x) => sum + x, 0);
    return num % n ? -1 : num / n;
}
```
