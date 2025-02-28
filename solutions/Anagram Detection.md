# 📝 Anagram Detection

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/529eef7a9194e0cbc1000255)

### 💡 Solution

```javascript
function isAnagram(test, original) {
	const normalize = w => w.toLowerCase().split('').sort().join('');
	return normalize(test) === normalize(original);
}
```
