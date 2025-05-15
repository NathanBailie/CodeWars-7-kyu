# 📝 parseInt() reloaded

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5)

### 💡 Solution

```javascript
const dic = {
    'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
    'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18,
    'nineteen': 19, 'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
    'hundred': 100, 'thousand': 1000, 'million': 1000000
};

function parseInt(str) {
    if (str === 'zero') return 0;
    let res = 0, currNum = 0;
    let nums = str.replace(/ and /g, ' ').split(/[\s-]+/);

    nums.forEach(n => {
        dic[n] < 100 ? currNum += dic[n]
            : n === 'hundred' ? currNum *= 100
                : (currNum *= dic[n], res += currNum, currNum = 0);
    });

    return res + currNum;
}
```
