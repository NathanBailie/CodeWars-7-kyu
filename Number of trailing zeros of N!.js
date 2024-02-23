// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

const zeros = n => n < 5 ? 0 : Math.floor(n / 5) + zeros(Math.floor(n / 5));