# 📝 Play with two Strings

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56c30ad8585d9ab99b000c54)

### 💡 Solution

```javascript
function workOnStrings(s1, s2) {
    let str1 = changeStr(s1, s2);
    let str2 = changeStr(s2, s1);
    return `${str1}${str2}`;
}

function changeStr(s1, s2) {
    let res = '';
    let hash = {};
    for (let char of s2.toLowerCase()) hash[char] = (hash[char] || 0) + 1;
    for (let char of s1) {
        let amount = hash[char.toLowerCase()] || 0;
        res += changeCase(char, amount);
    }
    return res;
}

function changeCase(char, n) {
    let res = char;
    for (let i = 0; i < n; i++) {
        res = res.toUpperCase() === res ? res.toLowerCase() : res.toUpperCase();
    }
    return res;
}
```
