# 📝 The Hidden Word

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5906a218dfeb0dbb52000005)

### 💡 Solution

```javascript
function hiddenWord(n) {
    const letters = { 0: 'o', 1: 'b', 2: 'l', 3: 'i', 4: 'e', 5: 't', 6: 'a', 7: 'd', 8: 'n', 9: 'm' };
    return String(n).split('').map(c => letters[c]).join('')
}
```
