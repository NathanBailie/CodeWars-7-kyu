# 📝 Find the stray number

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57f609022f4d534f05000024)

### 💡 Solution

```javascript
function stray(nums) {
    const sorted = nums.sort();
    return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0];
}
```
