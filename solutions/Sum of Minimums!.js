// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

const sumOfMinimums = arr => arr.reduce((sum, a) => sum + Math.min(...a), 0);