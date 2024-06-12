// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003

const disariumNumber = n => [...`${n}`].reduce((sum, n, i) => sum + n ** (i + 1), 0) === n ? 'Disarium !!' : 'Not !!';