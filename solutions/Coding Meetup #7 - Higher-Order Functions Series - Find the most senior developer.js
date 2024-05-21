// https://www.codewars.com/kata/582887f7d04efdaae3000090

function findSenior(list) {
    const maxAge = Math.max(...list.map(p => p.age));
    return list.filter(p => p.age === maxAge);
}