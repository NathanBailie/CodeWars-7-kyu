# 📝 Invert values

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad)

### 💡 Solution

```python
# 1
invert = lambda lst: [-n for n in lst]

# 2
invert = lambda lst: list(map(lambda n: -n, lst))
```
