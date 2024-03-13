// https://www.codewars.com/kata/581a52d305fe7756720002eb

function validateNumber(str) {
    return /^(0|-0|\+44)?7(-*[0-9]){9}$/.test(str) ? 'In with a chance' : 'Plenty more fish in the sea';
}