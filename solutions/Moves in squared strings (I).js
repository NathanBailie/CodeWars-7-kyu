// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25

const vertMirror = arr => arr.map(e => e.split('').reverse().join(''));
const horMirror = arr => arr.reverse();
const oper = (f, s) => f(s.split('\n')).join('\n');