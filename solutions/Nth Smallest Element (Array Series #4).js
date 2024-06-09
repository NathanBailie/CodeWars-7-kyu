// https://www.codewars.com/kata/5a512f6a80eba857280000fc

const nthSmallest = (arr, pos) => arr.sort((a, b) => b - a)[arr.length - pos];