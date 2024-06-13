// https://www.codewars.com/kata/597bb84522bc93b71e00007e

const stringMerge = (s1, s2, l) => s1.slice(0, s1.indexOf(l)) + s2.slice(s2.indexOf(l));