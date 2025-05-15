# 📝 Get number from string

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57a37f3cbb99449513000cd8)

### 💡 Solution

```python
import re

get_number_from_string = lambda s: int(re.sub('[^\d]', '', s))
```
