// https://www.codewars.com/kata/588f5a38ec641b411200005b

const howManyYears = (date1, date2) => Math.abs(date1.match(/\d{4}/)[0] - date2.match(/\d{4}/)[0]);