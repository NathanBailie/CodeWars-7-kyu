// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd

const mygcd = (a, b) => { while (b !== 0) [a, b] = [b, a % b]; return a; };