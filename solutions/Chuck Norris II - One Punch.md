# 📝 Chuck Norris II - One Punch

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57057a035eef1f7e790009ef)

### 💡 Solution

```javascript
const onePunch = s => typeof s !== 'string' || s.length === 0 ? 'Broken!' : s.split(' ').sort().join(' ').replace(/[ae]/gi, '');
```
