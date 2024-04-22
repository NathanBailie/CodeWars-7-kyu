// https://www.codewars.com/kata/58ef87dc4db9b24c6c000092

function sectSort(arr, start, length = arr.length) {
    let sortingPart = [...arr].splice(start, length).sort((a, b) => a - b);
    return [...arr.slice(0, start), ...sortingPart, ...arr.slice(start + length)];
}