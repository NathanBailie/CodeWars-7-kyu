# 📝 Handshake problem

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/5574835e3e404a0bed00001b)

### 💡 Solution

```javascript
function getParticipants(h) {
    let res = 1, sum = 0;
    while (sum < h) { sum += res - 1; res++; }
    return res - 1;
}
```
