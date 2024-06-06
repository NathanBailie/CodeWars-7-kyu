// https://www.codewars.com/kata/59706036f6e5d1e22d000016

const wordsToMarks = s => [...s].reduce((sum, c) => sum + c.charCodeAt() - 96, 0);