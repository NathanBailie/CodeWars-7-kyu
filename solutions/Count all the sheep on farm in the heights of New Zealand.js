// https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010

function lostSheep(f, s, t) {
    const getSum = arr => arr.reduce((acc, n) => acc + n, 0);
    return t - (getSum(f) + getSum(s));
}