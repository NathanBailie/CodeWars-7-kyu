# 📝 The Vowel Code

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/53697be005f803751e0015aa)

### 💡 Solution

```javascript
const encode = str => str.split('').map(c => 'aeiou'.indexOf(c) !== -1 ? 'aeiou'.indexOf(c) + 1 : c).join('');
const decode = str => str.split('').map(c => /\d/.test(c) ? 'aeiou'[c - 1] : c).join('');
```
