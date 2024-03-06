// https://www.codewars.com/kata/5a626fc7fd56cb63c300008c

function uncollapse(d) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr = [], start = 0, i = 0;
    while (i <= d.length) {
        let part = d.slice(start, i);
        if (nums.includes(part)) {
            arr.push(part); start = i;
        }
        i += 1;
    }
    return arr.join(' ');
}