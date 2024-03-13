// https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3

function calculate(s) {
    const nums = s.match(/\d+/g).map(Number);
    return /gains/.test(s) ? nums[0] + nums[1] : nums[0] - nums[1];
}