// https://www.codewars.com/kata/535474308bb336c9980006f2

const greet = name => `Hello ${name.toLowerCase().replace(/\w/, c => c.toUpperCase())}!`;