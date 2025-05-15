# 📝 Backspaces in string

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5727bb0fe81185ae62000ae3)

### 💡 Solution

```javascript
function cleanString(str) {
    return str.split('').reduce((res, c) => { c === '#' ? res.pop() : res.push(c); return res; }, []).join('');
}
```
