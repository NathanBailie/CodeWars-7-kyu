// https://www.codewars.com/kata/55eeddff3f64c954c2000059

const sumConsecutives = arr => arr.reduce((acc, n, i) => { n !== arr[i - 1] ? acc.push(n) : acc[acc.length - 1] += n; return acc }, []);