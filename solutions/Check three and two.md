# 📝 Check three and two

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a9e86705ee396d6be000091)

### 💡 Solution

```javascript
// №1
function checkThreeAndTwo(arr) {
	let counts = arr.map(char => arr.filter(x => x === char).length);
	return counts.includes(3) && counts.includes(2);
}

// №2
function checkThreeAndTwo(arr) {
	let hash = {};

	arr.forEach(char => {
		hash[char] = (hash[char] || 0) + 1;
	});

	let counts = Object.values(hash);
	return counts.includes(3) && counts.includes(2);
}
```
