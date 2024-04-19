// https://www.codewars.com/kata/580741302e14acaef900015a

const getMichaelLastName = str => str.match(/Michael [A-Z]\w+/g).map(w => w.split(' ')[1]);