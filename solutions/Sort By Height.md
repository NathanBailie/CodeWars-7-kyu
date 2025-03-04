# 📝 Sort By Height

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/589577f0d1b93ae32a000001)

### 💡 Solution

```javascript
function sortByHeight(a) {
    let people = a.filter(o => o !== -1).sort((a, b) => a - b);
    return a.map(n => n === -1 ? -1 : people.shift());
}
```
