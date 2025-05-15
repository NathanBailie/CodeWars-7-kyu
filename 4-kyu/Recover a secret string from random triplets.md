# 📝 Recover a secret string from random triplets

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/53f40dff5f9d31b813000774/javascript)

### 💡 Solution

```javascript
function recoverSecret(triplets) {
    let res = '';
    let chars = new Set(triplets.flat());
    while (chars.size) {
        for (let char of chars) {
            if (triplets.every(t => t.indexOf(char) <= 0)) {
                res += char;
                chars.delete(char);
                triplets = triplets.map(t => t.filter(c => c !== char)).filter(t => t.length);
                break;
            }
        }
    }
    return res;
}
```
