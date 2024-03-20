// https://www.codewars.com/kata/57d2807295497e652b000139

const averages = nums => nums ? nums.map((n, i) => (n + nums[i + 1]) / 2).slice(0, -1) : [];