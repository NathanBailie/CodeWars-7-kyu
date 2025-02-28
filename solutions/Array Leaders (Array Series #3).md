# 📝 Array Leaders (Array Series #3)

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a651865fd56cb55760000e0)

### 💡 Solution

```javascript
function arrayLeaders(arr) {
	let res = [];
	arr.forEach((n, i) => {
		if (n > arr.slice(i + 1).reduce((sum, n) => sum + n, 0)) res.push(n);
	});
	return res;
}
```
