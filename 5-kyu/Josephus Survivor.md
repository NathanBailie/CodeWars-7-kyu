# 📝 Josephus Survivor

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/555624b601231dc7a400017a)

### 💡 Solution

```javascript
function josephusSurvivor(n, k) {
    let i = 0, arr = Array.from({ length: n }, (_, i) => i + 1);
    while (arr.length > 1) { i = (i + k - 1) % arr.length; arr.splice(i, 1); }
    return arr[0];
}

const josephusSurvivor = (n, k) => n < 1 ? 1 : (josephusSurvivor(n - 1, k) + k - 1) % n + 1;
```
