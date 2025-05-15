# 📝 Incrementer

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/590e03aef55cab099a0002e8)

### 💡 Solution

```javascript
function incrementer(arr) {
    return arr.map((n, i) => {
        let num = n + i + 1;
        return num >= 10 ? num % 10 : num;
    })
}
```
