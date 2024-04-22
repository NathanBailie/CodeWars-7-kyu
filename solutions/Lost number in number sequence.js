// https://www.codewars.com/kata/595aa94353e43a8746000120

const findDeletedNumber = (arr, mixArr) => arr.find(n => !mixArr.includes(n)) || 0;