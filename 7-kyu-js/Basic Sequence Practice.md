# 📝 Basic Sequence Practice

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5436f26c4e3d6c40e5000282)

### 💡 Solution

```javascript
function sumOfN(n) {
	let num = 0,
		arr = [];
	for (let i = 0; i <= Math.abs(n); i++) {
		num += i * Math.sign(n);
		arr.push(num);
	}
	return arr;
}
```
