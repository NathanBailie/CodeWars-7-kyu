// https://www.codewars.com/kata/5aec1ed7de4c7f3517000079

function firstNSmallest(arr, n) {
    const sorted = [...arr].sort((a, b) => a - b).slice(0, n);
    let hash = sorted.reduce((obj, n) => { obj[n] = (obj[n] || 0) + 1; return obj }, {});
    return arr.filter(num => hash[num] && hash[num]--);
}