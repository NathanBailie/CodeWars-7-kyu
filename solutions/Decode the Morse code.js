// https://www.codewars.com/kata/54b724efac3d5402db00065e

const decodeMorse = c => c.trim().replace(/\s{2,}/g, ' s ').split(' ').map(e => MORSE_CODE[e] || ' ').join('');