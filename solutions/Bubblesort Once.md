# 📝 Bubblesort Once

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/56b97b776ffcea598a0006f2)

### 💡 Solution

```javascript
function bubblesortOnce(arr) {
	let clone = [...arr];
	for (let i = 0; i < clone.length; i++) {
		if (clone[i] > clone[i + 1]) {
			let temp = clone[i];
			clone[i] = clone[i + 1];
			clone[i + 1] = temp;
		}
	}
	return clone;
}
```
