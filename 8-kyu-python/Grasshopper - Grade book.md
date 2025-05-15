# 📝 Grasshopper - Grade book

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/55cbd4ba903825f7970000f5/python)

### 💡 Solution

```python
# 1
def get_grade(*args):
    num = sum(args) / len(args)
    
    return (
        'A' if num >= 90 else
        'B' if num >= 80 else
        'C' if num >= 70 else
        'D' if num >= 60 else
        'F'
    )

# 2
def get_grade(*args):
    num = sum(args) / len(args)
    
    if 90 <= num <= 100: return 'A'
    elif 80 <= num < 90: return 'B'
    elif 70 <= num < 80: return 'C'
    elif 60 <= num < 70: return 'D'
    elif 0 <= num < 60: return 'F'
    





print(get_grade(95, 90, 93))
```
