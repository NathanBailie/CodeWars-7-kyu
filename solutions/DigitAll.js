// https://www.codewars.com/kata/57eead3b5f79f6d977001fb7

const digitAll = x => typeof x !== 'string' ? 'Invalid input !' : x.replace(/[^0-9]/g, '');