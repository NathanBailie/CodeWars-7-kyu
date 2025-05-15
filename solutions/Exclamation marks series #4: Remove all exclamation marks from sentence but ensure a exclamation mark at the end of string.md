# 📝 Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57faf12b21c84b5ba30001b0)

### 💡 Solution

```python
import re

remove = lambda s: f"{re.sub('!', '', s)}!"
```
