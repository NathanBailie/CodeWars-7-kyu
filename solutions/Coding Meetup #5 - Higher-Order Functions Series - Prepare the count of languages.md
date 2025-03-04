# 📝 Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5828713ed04efde70e000346)

### 💡 Solution

```javascript
const countLanguages = l => l.reduce((acc, p) => { acc[p.language] = (acc[p.language] || 0) + 1; return acc }, {});
```
