// https://www.codewars.com/kata/54d81488b981293527000c8f

function sumPairs(ints, s) {
    let seen = {};
    for (let i = 0; i < ints.length; i++) {
        let current = ints[i];
        let diff = s - current;
        if (seen[diff]) return [diff, current];
        seen[current] = true;
    }
}