# 📝 Convert a linked list to a string

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/582c297e56373f0426000098)

### 💡 Solution

```javascript
function stringify(list) {
    let res = '';
    while (list !== null) {
        res += `${list.data} -> `;
        list = list.next;
    }
    return res + 'null';
}
```
