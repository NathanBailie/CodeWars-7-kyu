# 📝 Find the missing letter

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5839edaa6754d6fec10000a2)

### 💡 Solution

```javascript
function findMissingLetter(arr) {
    return String.fromCharCode(arr.find((e, i) => arr[i + 1].charCodeAt() - e.charCodeAt() === 2).charCodeAt() + 1);
}
```
