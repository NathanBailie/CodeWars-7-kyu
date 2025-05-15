# 📝 Product of consecutive Fib numbers

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5541f58a944b85ce6d00006a)

### 💡 Solution

```javascript
function productFib(target) {
    let [prev, curr] = [0, 1];
    while (prev * curr < target) [prev, curr] = [curr, prev + curr];
    return [prev, curr, prev * curr === target];
}
```
