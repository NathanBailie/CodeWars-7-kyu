# 📝 I Spy

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/555185132c0d4cca3d000197)

### 💡 Solution

```javascript
function spyOn(func) {
    let calls = [];

    function spy(...args) {
        calls.push({ args, result: func(...args) });
        return calls[calls.length - 1].result;
    }

    spy.callCount = () => calls.length;
    spy.wasCalledWith = n => calls.some(call => call.args.includes(n));
    spy.returned = n => calls.some(call => call.result === n);

    return spy;
}
```
