# 📝 Create Four Letter Birding Codes from Bird Names

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a580064e6be38fd34000147)

### 💡 Solution

```javascript
function birdCode(arr) {
    return arr.map((name) => {
        let arr = name.replace(/ |-/g, ' ').split(' ');
        switch (arr.length) {
            case 1:
                return arr.join('').slice(0, 4).toUpperCase();
            case 2:
                return arr.map((w) => w.slice(0, 2).toUpperCase()).join('');
            case 3:
                return arr.map((w, i) => i !== 2 ? w.slice(0, 1).toUpperCase() : w.slice(0, 2).toUpperCase()).join('');
            case 4:
                return arr.map((w) => w.slice(0, 1).toUpperCase()).join('');
            default:
                return '';
        }
    });
}
```
