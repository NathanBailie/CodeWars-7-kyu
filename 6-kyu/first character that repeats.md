# 📝 first character that repeats

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/54f9f4d7c41722304e000bbb)

### 💡 Solution

```javascript
function firstDup(str) {
    const c = str.match(/(.)(?=.*\1)/);
    return c ? c[1] : undefined;
}
```
