// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

const accum = s => s.split('').map((n, i) => n.toUpperCase() + n.toLowerCase().repeat(i)).join('-');