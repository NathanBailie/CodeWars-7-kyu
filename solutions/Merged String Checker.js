// https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa

function isMerge(s, p1, p2) {
    if (s === '') return p1 === '' && p2 === '';
    if (p1[0] === s[0] && isMerge(s.slice(1), p1.slice(1), p2)) return true;
    if (p2[0] === s[0] && isMerge(s.slice(1), p1, p2.slice(1))) return true;
    return false;
}