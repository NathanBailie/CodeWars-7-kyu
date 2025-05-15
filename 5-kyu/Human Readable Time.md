# 📝 Human Readable Time

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/52685f7382004e774f0001f7)

### 💡 Solution

```javascript
function humanReadable(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor(seconds % 60);
    const normalize = (num) => num < 10 ? `0${num}` : num;
    return `${normalize(h)}:${normalize(m)}:${normalize(s)}`;
}
```
