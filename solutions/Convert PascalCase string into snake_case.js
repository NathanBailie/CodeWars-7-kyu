// https://www.codewars.com/kata/529b418d533b76924600085d

const toUnderscore = s => String(s).match(/[A-Z]?[a-z\d]+/g).join('_').toLowerCase();