// https://www.codewars.com/kata/56a1c074f87bc2201200002e

const smaller = arr => arr.map((n, i) => arr.slice(i).reduce((acc, x) => n > x ? ++acc : acc, 0));