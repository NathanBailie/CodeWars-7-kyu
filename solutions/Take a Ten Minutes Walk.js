// https://www.codewars.com/kata/54da539698b8a2ad76000228

const isValidWalk = walk => walk.length === 10 && !walk.reduce((res, d) => res + { s: -1, n: 1, w: -2, e: 2 }[d], 0);