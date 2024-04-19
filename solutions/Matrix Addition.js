// https://www.codewars.com/kata/526233aefd4764272800036f

const matrixAddition = (a, b) => a.map((n, i) => n.map((e, j) => e + b[i][j]));