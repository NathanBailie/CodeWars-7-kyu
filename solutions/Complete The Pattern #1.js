// https://www.codewars.com/kata/5572f7c346eb58ae9c000047

const pattern = n => Array.from({ length: n }, (_, i) => String(i + 1).repeat(i + 1)).join('\n');