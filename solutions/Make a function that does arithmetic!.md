# 📝 Make a function that does arithmetic!

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/583f158ea20cfcbeb400000a)

### 💡 Solution

```javascript
function arithmetic(a, b, o) {
    const op = {
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y
    };

    return op[o](a, b);
}
```
