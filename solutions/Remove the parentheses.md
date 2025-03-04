# 📝 Remove the parentheses

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8)

### 💡 Solution

```javascript
function removeParentheses(s) {
    let open = 0;
    return s.split('').filter(c => {
        if (c === '(') { open++; return false; }
        if (c === ')') { open--; return false; }
        return open === 0;
    }).join('');
}
```
