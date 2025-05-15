# 📝 Function Cache

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/525481903700c1a1ff0000e1)

### 💡 Solution

```javascript
function cache(f) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (!cache.has(key)) cache.set(key, f(...args));
        return cache.get(key);
    };
}

const complexFunction = (a, b) => a + b;
```
