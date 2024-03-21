// https://www.codewars.com/kata/51b6249c4612257ac0000005

function solution(str) {
    const roman = { CM: 900, CD: 400, XC: 90, XL: 40, IX: 9, IV: 4, M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    return str.match(/CM|CD|XC|XL|IX|IV|[A-Z]/g).reduce((res, n) => res + roman[n], 0);
}