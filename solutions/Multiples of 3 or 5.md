# 📝 Multiples of 3 or 5

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/514b92a657cdc65150000006)

### 💡 Solution

```javascript
function solution(n) {
    return n < 0 ? 0 : Array.from({ length: n }, (_, i) => i).filter((num) => num % 3 === 0 || num % 5 === 0).reduce((sum, elem) => sum += elem, 0);
}
```
