# 📝 Single Word Pig Latin

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/single-word-pig-latin)

### 💡 Solution

```javascript
// https://chat.openai.com/c/8a223fcb-885c-4646-ae62-d07afb8b6b55

function pigLatin(str) {
    let s = str.toLowerCase();
    if (/[0-9]/g.test(s)) return null;
    if (/^[aeiou]/.test(s)) return `${s}way`;
    if (/^[^aeiou]+/.test(s)) return s.replace(/^([^aeiou]+)(.+)/, '$2$1ay');
    return null;
}
```
