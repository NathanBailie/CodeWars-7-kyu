// https://www.codewars.com/kata/58aed2cafab8faca1d000e20

const modifiedSum = (a, n) => a.reduce((acc, x) => acc + x ** n - x, 0);