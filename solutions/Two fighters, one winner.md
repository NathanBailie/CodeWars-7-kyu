# 📝 Two fighters, one winner

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/577bd8d4ae2807c64b00045b)

### 💡 Solution

```javascript
function declareWinner(f1, f2, firstAttacker) {
    const hits1 = Math.ceil(f1.health / f2.damagePerAttack);
    const hits2 = Math.ceil(f2.health / f1.damagePerAttack);
    return hits1 === hits2 ? firstAttacker : (hits1 > hits2 ? f1.name : f2.name);
}
```
