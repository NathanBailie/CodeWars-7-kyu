# 📝 Count the number of JavaScript developers coming from Europe

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/582746fa14b3892727000c4f)

### 💡 Solution

```javascript
function countDevelopers(list) {
    return list.reduce((sum, d) => /Europe/.test(d.continent) && /JavaScript/.test(d.language) ? ++sum : sum, 0);
}
```
