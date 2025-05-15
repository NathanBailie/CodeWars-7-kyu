# 📝 V A P O R C O D E

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5966eeb31b229e44eb00007a)

### 💡 Solution

```javascript
const vaporcode = str => [...str.replace(/\s/g, '').toUpperCase()].join('  ');
```
