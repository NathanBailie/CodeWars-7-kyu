# 📝 String transformer

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5878520d52628a092f0002d0)

### 💡 Solution

```javascript
function stringTransformer(str) {
    return str.split(' ').reverse().join(' ').split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
}
```
