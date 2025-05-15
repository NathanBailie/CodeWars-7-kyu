# 📝 Digital cypher

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/592e830e043b99888600002d)

### 💡 Solution

```javascript
function encode(str, n) {
    const keyStr = String(n);
    return [...str].map((char, i) => (char.charCodeAt() - 96) + parseInt(keyStr[i % keyStr.length]));
}
```
