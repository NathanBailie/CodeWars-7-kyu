// https://www.codewars.com/kata/51b62bf6a9c58071c600001b

function solution(num) {
    const roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    return Object.entries(roman).reduce((res, [key, value]) => {
        let r = Math.floor(num / value);
        num -= r * value;
        return res + key.repeat(r);
    }, '');
}