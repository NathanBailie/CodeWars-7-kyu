# 📝 Simple Fun #182 Happy g

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/58bcd27b7288983803000002)

### 💡 Solution

```javascript
const gHappy = str => !/g/.test(str.replace(/gg+/g, ''));
```
