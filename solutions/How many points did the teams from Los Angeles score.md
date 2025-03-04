# 📝 How many points did the teams from Los Angeles score

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/580559b17ab3396c58000abb)

### 💡 Solution

```javascript
function getLosAngelesPoints(r) {
    return r.reduce((acc, [team, score]) => /^Los Angeles [a-zA-Z]+/gi.test(team) ? acc + +score.replace(/^(\d+)\:\d+/, '$1') : acc, 0);
}
```
