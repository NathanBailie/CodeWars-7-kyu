// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
    return arr.findIndex((_, i, a) => a.slice(0, i).reduce((s, n) => s + n, 0) === a.slice(i + 1).reduce((s, n) => s + n, 0));
}