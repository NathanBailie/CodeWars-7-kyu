// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

const dnaStrand = dna => dna.replace(/./g, c => ({ A: 'T', T: 'A', C: 'G', G: 'C' }[c]));