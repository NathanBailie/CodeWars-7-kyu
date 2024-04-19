// https://www.codewars.com/kata/583203e6eb35d7980400002a

const countSmileys = arr => arr.reduce((sum, face) => /[:;][-~]?[\)D]/.test(face) ? ++sum : sum, 0);