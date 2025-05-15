# 📝 Simple Pig Latin

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/520b9d2ad5c005041100000f)

### 💡 Solution

```javascript
function pigIt(str) {
    return str.split(' ').map((word) => (/[a-z]/gi).test(word) ? word.slice(1) + word.slice(0, 1) + 'ay' : word).join(' ');
}
```
