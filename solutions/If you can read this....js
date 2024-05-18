// https://www.codewars.com/kata/586538146b56991861000293

const toNato = w => [...w.replace(/\s/g, '').toUpperCase()].map(c => NATO[c] ? NATO[c] : c).join(' ');