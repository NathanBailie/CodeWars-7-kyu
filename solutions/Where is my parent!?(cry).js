// https://www.codewars.com/kata/58539230879867a8cd00011c

function findChildren(str) {
    return [...str].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a)).join('');
}