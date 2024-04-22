// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

const halvingSum = n => n > 1 ? n + halvingSum(Math.floor(n / 2)) : n;