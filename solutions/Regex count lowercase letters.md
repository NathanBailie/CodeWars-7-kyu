# 📝 Regex count lowercase letters

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56a946cd7bd95ccab2000055)

### 💡 Solution

```python
import re

lowercase_count = lambda s: len(re.sub('[^a-z]', '', s))
```
