// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

const sumEvenNumbers = arr => arr.reduce((acc, n) => acc + (n % 2 === 0 ? n : 0), 0);