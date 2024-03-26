// https://www.codewars.com/kata/5511b2f550906349a70004e1

const lastDigit = (a, b) => b === 0n ? 1n : BigInt((Number(a % 10n) ** Number(b % 4n === 0n ? 4n : b % 4n))) % 10n;