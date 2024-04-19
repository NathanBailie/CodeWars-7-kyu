// https://www.codewars.com/kata/52b757663a95b11b3d00062d

const toWeirdCase = str => str.split(' ').map(w => w.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join('')).join(' ');