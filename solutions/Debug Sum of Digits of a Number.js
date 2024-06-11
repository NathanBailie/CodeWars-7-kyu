// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba

const getSumOfDigits = n => [...String(n)].reduce((sum, n) => sum += +n, 0);