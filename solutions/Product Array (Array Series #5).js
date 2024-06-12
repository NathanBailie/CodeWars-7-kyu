// https://www.codewars.com/kata/5a905c2157c562994900009d

const productArray = arr => arr.map((_, ind) => arr.reduce((acc, n, i) => i !== ind ? acc * n : acc, 1));