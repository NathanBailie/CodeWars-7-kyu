# 📝 Return the day

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59dd3ccdded72fc78b000b25)

### 💡 Solution

```python
def whatday(n):
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    msg = "Wrong, please enter a number between 1 and 7"
    return days[n - 1] if 1 <= n <= 7 else msg
```
