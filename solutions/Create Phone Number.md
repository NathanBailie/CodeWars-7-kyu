# 📝 Create Phone Number

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/525f50e3b73515a6db000b83)

### 💡 Solution

```javascript
const createPhoneNumber = (nums) => nums.join('').replace(/(...)(...)(.+)/, '($1) $2-$3');
```
