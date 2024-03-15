// https://www.codewars.com/kata/54e6533c92449cc251001667

const uniqueInOrder = (n) => Array.from(n).reduce((res, c) => res[res.length - 1] === c ? res : [...res, isNaN(+c) ? c : +c], []);