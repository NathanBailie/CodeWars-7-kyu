// https://www.codewars.com/kata/56d19b2ac05aed1a20000430

function betweenExtremes(nums) {
    let min = nums[0], max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        nums[i] < min && (min = nums[i])
        nums[i] > max && (max = nums[i])
    }
    return Math.abs(max - min);
}