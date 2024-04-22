// https://www.codewars.com/kata/5b37a50642b27ebf2e000010

function sumOfABeach(str) {
    const res = str.match(/sand|water|fish|sun/gi);
    return res ? res.length : 0;
}