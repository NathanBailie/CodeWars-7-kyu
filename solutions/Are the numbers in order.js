// https://www.codewars.com/kata/56b7f2f3f18876033f000307

const inAscOrder = arr => arr.every((n, i) => i === 0 || arr[i - 1] <= n);