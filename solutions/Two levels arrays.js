// https://www.codewars.com/kata/5227129b316b56d50d0003b7

function flattenTwoLevels(arr) {
    const flattenArray = arr => arr.reduce((arr, n) => arr.concat(Array.isArray(n) ? flattenArray(n) : n), []);
    return arr.map(n => Array.isArray(n) ? flattenArray(n) : n);
}