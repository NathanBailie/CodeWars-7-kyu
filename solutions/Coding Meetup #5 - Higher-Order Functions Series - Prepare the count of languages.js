// https://www.codewars.com/kata/5828713ed04efde70e000346

const countLanguages = l => l.reduce((acc, p) => { acc[p.language] = (acc[p.language] || 0) + 1; return acc }, {});