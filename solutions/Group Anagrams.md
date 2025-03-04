# 📝 Group Anagrams

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/537400e773076324ab000262)

### 💡 Solution

```javascript
function groupAnagrams(words) {
    const hash = {};
    words.forEach((word) => {
        const sortedWord = word.split('').sort().join('');
        hash[sortedWord] ? hash[sortedWord].push(word) : hash[sortedWord] = [word];
    });
    return Object.values(hash);
}
```
