# 📝 Tortoise racing

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/55e2adece53b4cdcb900006c)

### 💡 Solution

```javascript
function race(v1, v2, g) {
    if (v2 <= v1) return null;
    let s = Math.floor(g * 3600 / (v2 - v1));
    return [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60];
}
```
