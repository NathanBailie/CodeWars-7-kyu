# 📝 Return substring instance count - 2

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52190daefe9c702a460003dd)

### 💡 Solution

```javascript
function searchSubstr(t, s, o = true) {
    if (s === '') return 0;
    let count = 0, ind = t.indexOf(s);
    while (ind !== -1) count++, ind = o ? t.indexOf(s, ind + 1) : t.indexOf(s, ind + s.length);
    return count;
}
```
