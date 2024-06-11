// https://www.codewars.com/kata/5700c9acc1555755be00027e

const containAllRots = (str, arr) => str === "" || [...str].every((_, i) => arr.includes(str.slice(i) + str.slice(0, i)));