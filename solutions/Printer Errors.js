// https://www.codewars.com/kata/56541980fa08ab47a0000040

const printerError = s => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;