# 📝 Char Code Calculation

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/57f75cc397d62fc93d000059)

### 💡 Solution

```javascript
function calc(str) {
	function getSumOfDigits(strNum) {
		let sum = 0;
		for (let n of strNum) sum += +n;
		return sum;
	}

	let num1 = str.replace(/\w/g, c => c.charCodeAt());
	let num2 = num1.replace(/7/g, '1');

	return getSumOfDigits(num1) - getSumOfDigits(num2);
}
```
