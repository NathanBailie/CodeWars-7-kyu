# 📝 C.Wars

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/55968ab32cf633c3f8000008)

### 💡 Solution

```javascript
function initials(n) {
	return n
		.replace(/\b\w/g, l => l.toUpperCase())
		.split(' ')
		.map((w, i) =>
			i !== n.split(' ').length - 1 ? w.replace(/^(.).*/, (_, c) => `${c}.`) : w
		)
		.join('');
}
```
