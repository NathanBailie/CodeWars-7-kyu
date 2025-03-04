# 📝 Special Number (Special Numbers Series #5)

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a55f04be6be383a50000187)

### 💡 Solution

```javascript
const specialNumber = n => /^[0-5]+$/.test(n) ? 'Special!!' : 'NOT!!';

// const specialNumber = n => [...String(n)].every(n => (/[012345]/).test(n)) ? 'Special!!' : 'NOT!!';
```
