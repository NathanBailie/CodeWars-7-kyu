// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(n) {
    return String(n).split('').reduce((res, num) => res += num ** String(n).length, 0) === n;
}