// https://www.codewars.com/kata/51675d17e0c1bed195000001

function solution(digits) {
    let slice = 0, max = 0;
    for (let i = 0; i < digits.length; i++) {
        slice = digits.slice(i, i + 5);
        max = Math.max(slice, max);
    }
    return max;
}