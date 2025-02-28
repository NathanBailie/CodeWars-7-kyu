# 📝 All Star Code Challenge #22

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5865cff66b5699883f0001aa)

### 💡 Solution

```javascript
function toTime(seconds) {
	let h = Math.floor(seconds / 3600);
	let m = Math.floor((seconds % 3600) / 60);
	return `${h} hour(s) and ${m} minute(s)`;
}
```
