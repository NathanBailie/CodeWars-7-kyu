# 📝 Alphabet symmetry

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0)

### 💡 Solution

```javascript
const solve = arr =>
	arr.map(word =>
		[...word.toLowerCase()].reduce(
			(count, letter, i) => count + (letter.charCodeAt() - 97 === i),
			0
		)
	);
```
