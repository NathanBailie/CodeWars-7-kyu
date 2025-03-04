# 📝 Find how many times did a team from a given country win the Champions League

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9)

### 💡 Solution

```javascript
const countWins = (list, country) => list.filter(c => c.country === country).length;
```
