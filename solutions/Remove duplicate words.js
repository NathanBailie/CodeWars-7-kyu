// https://www.codewars.com/kata/5b39e3772ae7545f650000fc

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');