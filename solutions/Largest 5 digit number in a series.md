# 📝 Largest 5 digit number in a series

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/51675d17e0c1bed195000001)

### 💡 Solution

```javascript
function solution(digits) {
    let slice = 0, max = 0;
    for (let i = 0; i < digits.length; i++) {
        slice = digits.slice(i, i + 5);
        max = Math.max(slice, max);
    }
    return max;
}
```
