# 📝 Sorted? yes? no? how?

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/580a4734d6df748060000045)

### 💡 Solution

```javascript
function isSortedAndHow(array) {
    if (array.every((n, i, arr) => !i || arr[i - 1] <= n)) return "yes, ascending";
    if (array.every((n, i, arr) => !i || arr[i - 1] >= n)) return "yes, descending";
    return "no";
}
```
