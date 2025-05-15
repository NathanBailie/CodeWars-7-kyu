# 📝 Beeramid

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/51e04f6b544cf3f6550000c1)

### 💡 Solution

```javascript
function beeramid(bonus, price) {
    let lvl = 0;
    while (bonus >= (lvl + 1) ** 2 * price) {
        lvl += 1;
        bonus -= lvl ** 2 * price;
    }
    return lvl;
}
```
