# 📝 Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57fb44a12b53146fe1000136)

### 💡 Solution

```javascript
function balance(left, right) {
    const count = s => [...s].reduce((sum, c) => sum + (c === '!' ? 2 : 3), 0);
    let l = count(left), r = count(right);
    return l > r ? 'Left' : (r > l ? 'Right' : 'Balance');
}
```
