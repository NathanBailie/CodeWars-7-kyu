// https://www.codewars.com/kata/5353212e5ee40d4694001114

function exchangeWith(a, b) {
    const temp = [...a];
    a.splice(0, a.length, ...b.reverse());
    b.splice(0, b.length, ...temp.reverse());
}