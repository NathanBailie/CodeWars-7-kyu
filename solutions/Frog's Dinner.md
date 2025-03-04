# 📝 Frog's Dinner

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/65f361be2b30ec19b78d758f)

### 💡 Solution

```javascript
function frogContest(n) {
    const getSum = n => (n * (n + 1)) / 2;
    let a = getSum(n), b = getSum(Math.floor(a / 2));
    return `Chris ate ${a} flies, Tom ate ${b} flies and Cat ate ${getSum(a + b)} flies`;
}
```
