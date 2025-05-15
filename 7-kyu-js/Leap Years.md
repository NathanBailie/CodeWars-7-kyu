# 📝 Leap Years

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/526c7363236867513f0005ca)

### 💡 Solution

```javascript
const isLeapYear = y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
```
