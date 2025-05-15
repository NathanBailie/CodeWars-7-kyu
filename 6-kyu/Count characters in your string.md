# 📝 Count characters in your string

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52efefcbcdf57161d4000091)

### 💡 Solution

```javascript
function count(string) {
    let counter = {};
    for (let l of string) l in counter ? counter[l] += 1 : counter[l] = 1;
    return counter;
}
```
