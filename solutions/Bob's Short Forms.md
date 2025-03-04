# 📝 Bob's Short Forms

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/570cbe88f616a8f4f50011ac)

### 💡 Solution

```javascript
const shortForm = s =>
	s.replace(
		/^(.)(.+)(.)$/gi,
		(_, s, c, e) => s + c.replace(/[aeiou]/gi, '') + e
	);
```
