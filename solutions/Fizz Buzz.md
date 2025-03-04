# 📝 Fizz Buzz

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5300901726d12b80e8000498)

### 💡 Solution

```javascript
function fizzbuzz(n) {
    return Array.from({ length: n }, (_, index) => {
        const num = index + 1;
        return (num % 3 === 0 ? 'Fizz' : '') + (num % 5 === 0 ? 'Buzz' : '') || num;
    });
}
```
