# 📝 Thinkful - Logic Drills: Umbrella decider

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5865a28fa5f191d35f0000f8)

### 💡 Solution

```javascript
const takeUmbrella = (w, c) => (w === 'rainy') || (w === 'cloudy' && c > 0.20) || (w === 'sunny' && c > 0.50);
```
