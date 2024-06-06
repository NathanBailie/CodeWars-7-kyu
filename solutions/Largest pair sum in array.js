// https://www.codewars.com/kata/556196a6091a7e7f58000018

const largestPairSum = nums => {
    let a = -Infinity, b = -Infinity;
    for (let num of nums) num > a ? (b = a, a = num) : (num > b ? b = num : null);
    return a + b;
};