# 📝 Scrabble best word

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/563f960e3c73813942000015)

### 💡 Solution

```javascript
function getBestWord(points, words) {
    let map = words.map((w, i) => [i, w.length, [...w].reduce((sum, c) => sum + points[c.charCodeAt() - 65], 0)]);
    map.sort((a, b) => b[2] - a[2] || a[1] - b[1] || a[0] - b[0]);
    return map[0][0];
}
```
