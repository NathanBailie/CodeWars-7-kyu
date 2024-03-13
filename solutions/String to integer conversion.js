// https://www.codewars.com/kata/54fdadc8762e2e51e400032c

const myParseInt = str => /^\d+$/g.test(str.trim()) ? +str : NaN;