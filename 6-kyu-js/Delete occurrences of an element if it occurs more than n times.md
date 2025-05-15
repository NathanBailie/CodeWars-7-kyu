# 📝 Delete occurrences of an element if it occurs more than n times

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/554ca54ffa7d91b236000023)

### 💡 Solution

```javascript
function deleteNth(arr, n) {
    let res = [];
    arr.forEach(x => res.filter(n => n === x).length < n && res.push(x));
    return res;
}
```
