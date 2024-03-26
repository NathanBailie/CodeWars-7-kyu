// https://www.codewars.com/kata/52e88b39ffb6ac53a400022e

const int32ToIp = a => !a ? '0.0.0.0' : a.toString(2).padStart(32, '0').match(/\d{8}/g).map(n => parseInt(n, 2)).join('.');