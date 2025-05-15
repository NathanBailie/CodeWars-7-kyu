# 📝 Make the Deadfish Swim

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/51e0007c1f9378fa810002a9)

### 💡 Solution

```javascript
function parse(data) {
    let count = 0;
    let arr = [];

    for (let elem of data.split('')) {
        if (elem == 'i') ++count;
        if (elem == 'd') --count;
        if (elem == 's') count **= 2;
        if (elem == 'o') arr.push(count);
    }

    return arr;
}
```
