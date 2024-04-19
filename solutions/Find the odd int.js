// https://www.codewars.com/kata/54da5a58ea159efa38000836

const findOdd = (arr) => arr.reduce((res, num) => res ^ num, 0);