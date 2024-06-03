// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

const openOrSenior = data => data.map(([a, g]) => a >= 55 && g > 7 ? 'Senior' : 'Open');