// https://www.codewars.com/kata/59f08f89a5e129c543000069

const dup = s => s.map(n => n.replace(/(.)\1+/g, '$1'));