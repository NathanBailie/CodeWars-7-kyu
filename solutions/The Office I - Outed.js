// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1

function outed(meet, boss) {
    let sum = 0, people = 0;
    for (let p in meet) {
        sum += p === boss ? meet[p] * 2 : meet[p];
        people++;
    }
    return sum / people <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}