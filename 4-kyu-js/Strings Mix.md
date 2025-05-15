# 📝 Strings Mix

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5629db57620258aa9d000014)

### 💡 Solution

```javascript
function mix(s1, s2) {
    let h1 = getHash(s1), h2 = getHash(s2);
    let res = [];

    for (let key in h1) {
        if (h2[key] === undefined) res.push(['1', key.repeat(h1[key])]);
        if (h1[key] === h2[key]) res.push(['=', key.repeat(h1[key])]);
        if (h2[key] > h1[key]) res.push(['2', key.repeat(h2[key])]);
    }

    for (let key in h2) {
        if (h1[key] === undefined) res.push(['2', key.repeat(h2[key])]);
        if (h1[key] > h2[key]) res.push(['1', key.repeat(h1[key])]);
    }

    return res.sort((a, b) => b[1].length - a[1].length || (a[0] + a[1] > b[0] + b[1] ? 1 : -1)).map(c => `${c[0]}:${c[1]}`).join('/');
}

function getHash(str) {
    let hash = [...str.replace(/\s/g, '')].reduce((obj, c) => { /[a-z]/.test(c) && (obj[c] = (obj[c] || 0) + 1); return obj; }, {});
    let newHash = {};
    for (let key in hash) hash[key] > 1 && (newHash[key] = hash[key]);
    return newHash;
}
```
