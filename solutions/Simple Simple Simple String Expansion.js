// https://github.com/Automedon/CodeWars-6-kyu-Soluitions/blob/master/Autocomplete!%20Yay!.js

const stringExpansion = s => s.replace(/(\d\D+)/g, (g, r) => g.split('').map((e, i, a) => i === 0 ? '' : e.repeat(a[0]))).replace(/,/g, '').replace(/\d*/g, '');

// the best
// const stringExpansion = s => s.replace(/\d\D*/g, m => m.slice(1).replace(/./g, n => n.repeat(m[0])));