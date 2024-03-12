// https://www.codewars.com/kata/580559b17ab3396c58000abb

function getLosAngelesPoints(r) {
    return r.reduce((acc, [team, score]) => /^Los Angeles [a-zA-Z]+/gi.test(team) ? acc + +score.replace(/^(\d+)\:\d+/, '$1') : acc, 0);
}