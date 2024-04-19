// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

function getLengthOfMissingArray(a) {
    if (!a || a.length === 0 || a.some(arr => !arr || arr.length === 0)) return 0;
    let arr = a.filter(arr => arr).map(n => n.length).sort((a, b) => a - b);
    let res = (arr[0] + arr[arr.length - 1]) * (arr.length + 1) / 2 - arr.reduce((acc, n) => acc + n, 0);
    return res;
}