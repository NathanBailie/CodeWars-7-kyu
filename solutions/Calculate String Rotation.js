// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014

const shiftedDiff = (f, s) => f.length !== s.length ? -1 : (s + s).indexOf(f);