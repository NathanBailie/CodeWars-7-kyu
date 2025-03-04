# 📝 Word a10n (abbreviation)

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5375f921003bf62192000746)

### 💡 Solution

```javascript
const abbreviate = s => s.replace(/\w{4,}/g, w => w[0] + (w.length - 2) + w[w.length - 1]);
```
