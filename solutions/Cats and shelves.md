# 📝 Cats and shelves

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/62c93765cef6f10030dfa92b)

### 💡 Solution

```javascript
function solution(start, finish) {
	let jumps = 0;
	while (start < finish) {
		start + 3 <= finish ? (start += 3) : (start += 1);
		jumps++;
	}
	return jumps;
}
```
