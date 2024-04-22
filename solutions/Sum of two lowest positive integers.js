// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(nums) {
    const sortedArr = nums.sort((a, b) => a - b);
    return sortedArr[0] + sortedArr[1];
}