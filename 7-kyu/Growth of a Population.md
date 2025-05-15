# 📝 Growth of a Population

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/563b662a59afc2b5120000c6)

### 💡 Solution

```javascript
function nbYear(p0, percent, aug, p) {
	let years = 0;
	let population = p0;

	while (population < p) {
		population = Math.floor(population + (population * percent) / 100) + aug;
		years++;
	}

	return years;
}
```
