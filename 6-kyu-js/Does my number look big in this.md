# 📝 Does my number look big in this

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5287e858c6b5a9678200083c)

### 💡 Solution

```javascript
function narcissistic(n) {
    return String(n).split('').reduce((res, num) => res += num ** String(n).length, 0) === n;
}
```
