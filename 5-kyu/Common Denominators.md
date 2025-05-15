# 📝 Common Denominators

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/54d7660d2daf68c619000d95)

### 💡 Solution

```javascript
function convertFrac(arr) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);
    const denominator = arr.reduce((acc, [_, d]) => lcm(acc, d), 1);
    return arr.map(([n, d]) => `(${n * (denominator / d)},${denominator})`).join('');
}
```
