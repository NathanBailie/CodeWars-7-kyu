# 📝 Simple Sentences

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5297bf69649be865e6000922)

### 💡 Solution

```javascript
const makeSentence = arr => arr.join(' ').replace(/\./g, '').trim().replace(/ , /g, ', ') + '.';
```
