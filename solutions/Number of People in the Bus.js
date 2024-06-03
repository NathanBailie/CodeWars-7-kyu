// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

const number = arr => arr.reduce((acc, [e, q]) => acc + e - q, 0);