// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(nums) {
    let uniqNums = [...new Set(nums)].sort((a, b) => a - b);
    return parseInt(uniqNums.join(''));;
}