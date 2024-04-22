// https://www.codewars.com/kata/59f11118a5e129e591000134

const repeats = arr => arr.filter((n, _, arr) => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((sum, n) => sum + n, 0);