# 📝 Extract last names of people named Michael

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/580741302e14acaef900015a)

### 💡 Solution

```javascript
const getMichaelLastName = str => str.match(/Michael [A-Z]\w+/g).map(w => w.split(' ')[1]);
```
