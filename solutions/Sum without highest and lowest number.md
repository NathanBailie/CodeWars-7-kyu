# 📝 Sum without highest and lowest number

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/576b93db1129fcf2200001e6)

### 💡 Solution

```python
def sum_array(arr):
    if arr is None or len(arr) <= 1: return 0
    arr.sort()
    return sum(arr[1:-1])
```
