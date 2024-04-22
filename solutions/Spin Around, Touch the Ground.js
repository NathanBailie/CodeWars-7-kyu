// https://www.codewars.com/kata/65127141a5de2b1dcb40927e

const spinAround = t => Math.floor(Math.abs(t.reduce((sum, n) => sum + (n === 'left' ? -90 : 90), 0)) / 360);