// https://www.codewars.com/kata/581dc1852d68e751180000c6

Object.defineProperty(Array.prototype, 'insert', {
    value: function (i, v) {
        const index = i > this.length ? this.length : i;
        this.splice(index, 0, v);
        return this;
    },
});