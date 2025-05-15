# 📝 Regexp Basics - is it a digit?

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/567bf4f7ee34510f69000032)

### 💡 Solution

```python
import re

is_digit = lambda s: bool(re.fullmatch('[0-9]', s))
```
