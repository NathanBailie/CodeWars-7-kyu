# 📝 Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/583ea278c68d96a5fd000abd)

### 💡 Solution

```javascript
function sortByLanguage(list) {
    return list.sort((a, b) => a.language.localeCompare(b.language) || a.firstName.localeCompare(b.firstName));
}
```
