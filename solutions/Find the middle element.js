// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

const gimme = arr => arr.indexOf([...arr].sort((a, b) => a - b)[1]);