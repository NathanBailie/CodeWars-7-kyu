// https://www.codewars.com/kata/55b86beb1417eab500000051

function gap(num) {
    const matches = num.toString(2).replace(/0+$/, '').split('1');
    return Math.max(...matches.map(n => n.length));
}