# 📝 Objectify all the strings

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/55dd54631827120dd800002b)

### 💡 Solution

```javascript
String.prototype.hashify = function () {
    let hash = {};

    for (let i = 0; i < this.length; i++) {
        let currentChar = this[i];
        let nextChar = this[(i + 1) % this.length];

        if (hash[currentChar] === undefined) {
            hash[currentChar] = nextChar;
        } else {
            if (Array.isArray(hash[currentChar])) {
                hash[currentChar].push(nextChar);
            } else {
                hash[currentChar] = [hash[currentChar], nextChar]
            }
        }
    }

    return hash;
};
```
