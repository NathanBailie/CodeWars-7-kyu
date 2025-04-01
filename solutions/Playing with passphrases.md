# 📝 Playing with passphrases

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/559536379512a64472000053)

### 💡 Solution

```javascript
function playPass(str, n) {
	return [...str]
		.map((char, i) => {
			if (!isNaN(parseInt(char))) return 9 - parseInt(char);
			else {
				let shifted = shiftChar(char, n);
				return i % 2 === 0 ? shifted.toUpperCase() : shifted.toLowerCase();
			}
		})
		.reverse()
		.join('');
}

function shiftChar(char, shift) {
	const charCode = char.charCodeAt();

	if (/[a-zA-Z]/.test(char)) {
		const base = charCode >= 97 ? 97 : 65;
		return String.fromCharCode(((charCode - base + shift) % 26) + base);
	}

	return char;
}
```
