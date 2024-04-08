// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

function solve(arr) {
    let c = arr.reduce((acc, n) => { acc[n] = acc[n] + 1 || 1; return acc }, {});
    return arr.sort((a, b) => c[b] - c[a] || a - b);
}