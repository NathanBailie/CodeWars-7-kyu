// https://www.codewars.com/kata/51edd51599a189fe7f000015

const solution = (a1, a2) => a1.reduce((acc, n, i) => acc + (Math.abs(n - a2[i]) ** 2), 0) / a1.length;