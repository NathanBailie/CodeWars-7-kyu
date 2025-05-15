# 📝 A Chain adding function

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/539a0e4d85e3425cb0000a88)

### 💡 Solution

```javascript
function add(n) {
    const f = m => add(n + m);
    f.valueOf = () => n;
    return f;
}
```
