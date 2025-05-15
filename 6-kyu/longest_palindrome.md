# 📝 longest_palindrome

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/54bb6f887e5a80180900046b)

### 💡 Solution

```javascript
function longestPalindrome(s) {
    if (s.length === 0) return 0;
    let maxLength = 1;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let slice = s.slice(i, j);
            if (isPalindrome(slice) && slice.length > maxLength) {
                maxLength = slice.length;
            }
        }
    }
    return maxLength;
}

const isPalindrome = str => [...str].reverse().join('') === str;
```
