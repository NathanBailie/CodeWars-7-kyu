// https://www.codewars.com/kata/5a87449ab1710171300000fd

function tidyNumber(n) {
    let nums = [...String(n)];
    for (let i = 0; i < nums.length - 1; i++) if (nums[i] > nums[i + 1]) return false;
    return true;
}