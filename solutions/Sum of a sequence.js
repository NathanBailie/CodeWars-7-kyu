// https://www.codewars.com/kata/586f6741c66d18c22800010a

const sequenceSum = (start, end, step) => start > end ? 0 : start + sequenceSum(start + step, end, step);