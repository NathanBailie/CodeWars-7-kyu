# 📝 Remove the minimum

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)

### 💡 Solution

```javascript
function removeSmallest(numbers) {
    const min = Math.min.apply(null, numbers);
    const index = numbers.indexOf(min);
    const result = numbers.filter((elem, id) => id !== index);

    return result;
}
```
