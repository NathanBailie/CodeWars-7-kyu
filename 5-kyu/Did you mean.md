# 📝 Did you mean

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5259510fc76e59579e0009d4)

### 💡 Solution

```javascript
function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.findMostSimilar = function (term) {
    function levenshteinDistance(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        const matrix = Array.from({ length: m + 1 }, (_, i) => Array.from({ length: n + 1 }, (_, j) => i || j));
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + cost
                );
            }
        }
        return matrix[m][n];
    }

    const closestWord = this.words.reduce((closest, word) => {
        const distance = levenshteinDistance(term, word);
        return distance < closest.distance ? { word, distance } : closest;
    }, { word: '', distance: Infinity });

    return closestWord.word;
}
```
