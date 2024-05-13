// https://www.codewars.com/kata/59df2f8f08c6cec835000012

function meeting(s) {
    return s.toUpperCase()
        .split(';')
        .map(str => str.split(':').reverse())
        .sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]))
        .map(arr => `(${arr[0]}, ${arr[1]})`)
        .join('');
}