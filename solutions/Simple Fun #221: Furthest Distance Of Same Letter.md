# 📝 Simple Fun #221: Furthest Distance Of Same Letter

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5902bc48378a926538000044)

### 💡 Solution

```javascript
function distSameLetter(s) {
    let maxDist = 0, char = '';
    for (let i = 0; i < s.length; i++) {
        const dist = s.lastIndexOf(s[i]) - i + 1;
        dist > maxDist && (maxDist = dist, char = s[i]);
    }

    return char + maxDist;
}
```
