// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

const reverse = str => str.trim().split(' ').map((w, i) => i % 2 === 0 ? w : w.split('').reverse().join('')).join(' ');