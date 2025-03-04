# 📝 Nickname Generator

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/593b1909e68ff627c9000186)

### 💡 Solution

```javascript
function nicknameGenerator(name) {
    return name.length < 4 ?
        "Error: Name too short" :
        /[aeiou]/.test(name[2]) ? name.slice(0, 4) : name.slice(0, 3);
}
```
