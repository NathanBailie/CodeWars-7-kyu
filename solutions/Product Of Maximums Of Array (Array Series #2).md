# 📝 Product Of Maximums Of Array (Array Series #2)

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a63948acadebff56f000018)

### 💡 Solution

```javascript
function maxProduct(nums, k) {
    nums.sort((a, b) => b - a);
    let res = 1;
    for (let i = 0; i < k; i++) res *= nums[i];
    return res;
}
```
