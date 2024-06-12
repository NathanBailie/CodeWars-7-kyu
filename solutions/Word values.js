// https://www.codewars.com/kata/598d91785d4ce3ec4f000018

const wordValue = arr => arr.map((str, i) => [...str].reduce((sum, c) => c !== ' ' ? sum + (c.charCodeAt() - 96) * (i + 1) : sum, 0));