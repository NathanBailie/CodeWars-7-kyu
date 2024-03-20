// https://www.codewars.com/kata/525f039017c7cd0e1a000a26

function palindromeChainLength(n) {
    const reverse = num => parseInt([...String(num)].reverse().join(''));
    let count = 0
    while (n !== reverse(n)) { count++; n += reverse(n); }
    return count;
}