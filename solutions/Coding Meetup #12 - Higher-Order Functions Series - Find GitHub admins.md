# 📝 Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/582dace555a1f4d859000058)

### 💡 Solution

```javascript
const findAdmin = (list, lang) => list.filter(n => n.language === lang && n.githubAdmin === 'yes');
```
