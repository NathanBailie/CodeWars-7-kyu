// https://www.codewars.com/kata/5aff237c578a14752d0035ae

const predictAge = (...args) => Math.floor(Math.sqrt(args.reduce((res, n) => res + n ** 2, 0)) / 2);