# 📝 Automorphic Number (Special Numbers Series #6)

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5a58d889880385c2f40000aa)

### 💡 Solution

```javascript
const automorphic = n =>
	String(n ** 2).endsWith(String(n)) ? 'Automorphic' : 'Not!!';
```
