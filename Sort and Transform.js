// https://www.codewars.com/kata/57cc847e58a06b1492000264

function sortTransform(a) {
    const sort = arr => [...arr.sort((a, b) => a - b)];
    const revSort = arr => [...arr.sort((a, b) => b - a)];
    const asciiSort = arr => [...arr.map(num => String.fromCharCode(num))].sort();
    const toLetters = arr => [...arr.slice(0, 2), ...arr.slice(-2)].map(n => String.fromCharCode(n)).join('');
    const toSlice = arr => [...arr.slice(0, 2), ...arr.slice(-2)].join('');
    return `${toLetters(a)}-${toLetters(sort(a))}-${toLetters(revSort(a))}-${toSlice(asciiSort(a))}`
}