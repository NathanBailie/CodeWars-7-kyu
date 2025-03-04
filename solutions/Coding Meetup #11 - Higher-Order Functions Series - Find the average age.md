# 📝 Coding Meetup #11 - Higher-Order Functions Series - Find the average age

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/582ba36cc1901399a70005fc)

### 💡 Solution

```javascript
function getAverageAge(list) {
    const ages = list.map(c => c.age);
    return Math.round(ages.reduce((acc, a) => acc + a, 0) / ages.length);
}
```
