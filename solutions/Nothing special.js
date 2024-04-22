// https://www.codewars.com/kata/57029e77005264a3b9000eb5

const nothingSpecial = str => typeof str === 'string' ? str.replace(/[^a-z\d\s]/gi, '') : "Not a string!";