# 📝 Write Number in Expanded Form

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5842df8ccbd22792a4000245)

### 💡 Solution

```javascript
function expandedForm(num) {
    let str = String(num), res = [];
    for (let i = 0; i < str.length; i++) str[i] !== '0' && res.push(str[i] + '0'.repeat(str.length - i - 1));
    return res.join(' + ');
}
```
