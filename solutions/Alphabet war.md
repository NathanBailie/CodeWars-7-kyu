# 📝 Alphabet war

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/59377c53e66267c8f6000027)

### 💡 Solution

```javascript
function alphabetWar(str) {
	let d = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 },
		score = 0;
	for (let c of str) score += d[c] || 0;
	return score > 0
		? 'Left side wins!'
		: score < 0
		? 'Right side wins!'
		: "Let's fight again!";
}
```
