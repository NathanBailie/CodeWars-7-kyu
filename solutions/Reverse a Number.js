// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

const reverseNumber = n => String(Math.abs(n)).split('').reverse().join('') * (n < 1 ? -1 : 1);