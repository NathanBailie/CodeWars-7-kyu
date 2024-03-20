// https://www.codewars.com/kata/5d50e3914861a500121e1958

const addLetters = (...l) => l.length !== 0 ? String.fromCharCode((l.reduce((acc, c) => acc + c.charCodeAt(0) - 96, 0) - 1) % 26 + 97) : 'z';