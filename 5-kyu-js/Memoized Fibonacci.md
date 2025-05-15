# 📝 Memoized Fibonacci

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/529adbf7533b761c560004e5)

### 💡 Solution

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    let arr = [1, 1];
    for (let i = 1; i < n; i++) arr.push(arr[i - 1] + arr[i]);
    return arr[arr.length - 2];
}
```
