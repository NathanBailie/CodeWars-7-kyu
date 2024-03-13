// https://www.codewars.com/kata/5a02e9c19f8e2dbd50000167

const vowelStart = s => s.replace(/[^a-z\d]/gi, '').replace(/[aeiou]/gi, ' $&').trim().toLowerCase();