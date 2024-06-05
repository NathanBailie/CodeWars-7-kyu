// https://www.codewars.com/kata/558f9f51e85b46e9fa000025

function differenceOfSquares(n) {
    let sqOfSum = Array.from({ length: n }, (_, i) => i + 1).reduce((sum, n) => sum + n, 0) ** 2;
    let sumOfSq = Array.from({ length: n }, (_, i) => (i + 1) ** 2).reduce((sum, n) => sum + n, 0);
    return sqOfSum - sumOfSq;
}