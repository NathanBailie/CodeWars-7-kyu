# 📝 First non-repeating character

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52bc74d4ac05d0945d00054e)

### 💡 Solution

```javascript
function firstNonRepeatingLetter(s) {
    return s[s.split('').map(elem => elem.toLowerCase()).findIndex((char, i, arr) => arr.indexOf(char) === arr.lastIndexOf(char))] || '';
}
```
