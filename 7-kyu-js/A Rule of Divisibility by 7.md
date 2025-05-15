# 📝 A Rule of Divisibility by 7

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/55e6f5e58f7817808e00002e)

### 💡 Solution

```javascript
function seven(n) {
	let res = n,
		steps = 0;
	while (res > 99) {
		res = Math.floor(res / 10) - (res % 10) * 2;
		steps++;
	}
	return [res, steps];
}
```
