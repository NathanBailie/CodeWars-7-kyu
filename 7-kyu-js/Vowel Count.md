# 📝 Vowel Count

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

### 💡 Solution

```javascript
function highAndLow(numbers) {
    const nums = numbers.split(' ');
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
}
```
