// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2

function validate(n) {
    const nums = [...String(n)].map(Number);
    return nums.reduceRight((sum, x, i) => {
        (nums.length - i) % 2 === 0 && (x *= 2, x > 9 && (x -= 9));
        return sum + x;
    }, 0) % 10 === 0;
}