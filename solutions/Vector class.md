# 📝 Vector class

## 🔗 [Task description on CodeWars](https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4)

### 💡 Solution

```javascript
class Vector {
    constructor(elems) {
        this.elems = elems;
    }

    add(v) {
        this.checkLength(v);
        return new Vector(this.elems.map((n, i) => n + v.elems[i]));
    }

    subtract(v) {
        this.checkLength(v);
        return new Vector(this.elems.map((n, i) => n - v.elems[i]));
    }

    dot(v) {
        this.checkLength(v);
        return this.elems.reduce((acc, n, i) => acc + n * v.elems[i], 0);
    }

    norm() {
        return Math.sqrt(this.elems.reduce((acc, n) => acc + n ** 2, 0));
    }

    toString() {
        return `(${this.elems.join(',')})`;
    }

    equals(v) {
        return this.elems.every((n, i) => n === v.elems[i]);
    }

    checkLength(v) {
        if (this.elems.length !== v.elems.length) {
            throw new Error('Different vector lengths!');
        }
    }
}
```
