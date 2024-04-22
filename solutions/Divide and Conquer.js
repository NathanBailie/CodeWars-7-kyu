// https://www.codewars.com/kata/57eaec5608fed543d6000021

const divCon = x => x.reduce((acc, n) => acc + (typeof n === 'number' ? n : -(+n)), 0);