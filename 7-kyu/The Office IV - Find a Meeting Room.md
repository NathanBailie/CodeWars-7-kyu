# 📝 The Office IV - Find a Meeting Room

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57f604a21bd4fe771b00009c)

### 💡 Solution

```javascript
function meeting(arr) {
    const ind = arr.indexOf('O');
    return ind > -1 ? ind : 'None available!';
}
```
