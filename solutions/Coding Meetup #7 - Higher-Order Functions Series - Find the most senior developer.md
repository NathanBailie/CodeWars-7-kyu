# 📝 Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/582887f7d04efdaae3000090)

### 💡 Solution

```javascript
function findSenior(list) {
    const maxAge = Math.max(...list.map(p => p.age));
    return list.filter(p => p.age === maxAge);
}
```
