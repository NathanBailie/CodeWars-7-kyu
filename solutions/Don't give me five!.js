// https://www.codewars.com/kata/5813d19765d81c592200001a

function dontGiveMeFive(start, end) {
    let sum = [];
    for (let i = start; i <= end; i++) if (!/5/.test(i)) sum.push(i);
    return sum.length;
}