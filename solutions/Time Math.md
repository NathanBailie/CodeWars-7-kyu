# 📝 Time Math

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5aceae374d9fd1266f0000f0)

### 💡 Solution

```javascript
function timeMath(t1, op, t2) {
    let s1 = getSeconds(t1), s2 = getSeconds(t2), resSec;
    resSec = op === '+' ? s1 + s2 : (op === '-' ? s1 - s2 : null);
    resSec = ((resSec % 86400) + 86400) % 86400;
    let h = Math.floor(resSec / 3600);
    let m = Math.floor((resSec % 3600) / 60);
    let s = resSec % 60;
    return `${normalize(h)}:${normalize(m)}:${normalize(s)}`;
}

function getSeconds(time) {
    let [h, m, s] = time.split(':').map(Number);
    return h * 3600 + m * 60 + s;
}

const normalize = n => n < 10 ? `0${n}` : n;
```
