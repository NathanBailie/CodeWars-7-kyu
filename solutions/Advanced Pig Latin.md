# 📝 Advanced Pig Latin

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/533c46b140aafec05b000d31)

### 💡 Solution

```javascript
function translate(str) {
    const vowels = 'aeiouAEIOU';
    return str.replace(/\b([a-zA-Z]+)\b/g, (_, w) => {
        let firstVowelIndex = [...w].findIndex(с => vowels.includes(с));
        let res =
            firstVowelIndex === -1 ? w + 'ay' :
                firstVowelIndex === 0 ? w + 'way' :
                    (w.slice(firstVowelIndex) + w.slice(0, firstVowelIndex).toLowerCase() + 'ay');
        return (w[0] === w[0].toUpperCase()) ? (res[0].toUpperCase() + res.slice(1)) : res;
    });
}
```
