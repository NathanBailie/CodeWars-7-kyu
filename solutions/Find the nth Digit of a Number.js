// https://www.codewars.com/kata/577b9960df78c19bca00007e

function findDigit(n, nth) {
    if (nth <= 0) return -1;
    let StrNum = String(Math.abs(n));
    if (nth > StrNum.length) return 0;
    return +StrNum[StrNum.length - nth];
}