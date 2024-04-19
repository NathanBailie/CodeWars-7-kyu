// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const dif = target - nums[i];
        if (hash[dif] !== undefined) return [hash[dif], i];
        hash[nums[i]] = i;
    }
    return null;
}