# 📝 Calculating with Functions

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39)

### 💡 Solution

```javascript
const zero = f => f ? f(0) : 0;
const one = f => f ? f(1) : 1;
const two = f => f ? f(2) : 2;
const three = f => f ? f(3) : 3;
const four = f => f ? f(4) : 4;
const five = f => f ? f(5) : 5;
const six = f => f ? f(6) : 6;
const seven = f => f ? f(7) : 7;
const eight = f => f ? f(8) : 8;
const nine = f => f ? f(9) : 9;

const plus = b => a => a + b;
const minus = b => a => a - b;
const times = b => a => a * b;
const dividedBy = b => a => Math.floor(a / b);
```
