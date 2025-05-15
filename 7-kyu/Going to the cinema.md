# 📝 Going to the cinema

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/562f91ff6a8b77dfe900006e)

### 💡 Solution

```javascript
function movie(card, t, p) {
    let a = 0, b = card, m = 1;
    while (Math.ceil(b) >= a) a += t, b += t * Math.pow(p, m++);
    return m - 1;
}
```
