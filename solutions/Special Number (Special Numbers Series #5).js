// https://www.codewars.com/kata/5a55f04be6be383a50000187

const specialNumber = n => /^[0-5]+$/.test(n) ? 'Special!!' : 'NOT!!';

// const specialNumber = n => [...String(n)].every(n => (/[012345]/).test(n)) ? 'Special!!' : 'NOT!!';