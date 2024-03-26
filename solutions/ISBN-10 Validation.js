// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

function validISBN10(isbn) {
    if (!/^\d{9}[\dX]$/i.test(isbn)) return false;
    return isbn.split('').reduce((res, e, i) => res + (e === 'X' ? 10 : +e) * (i + 1), 0) % 11 === 0;
}