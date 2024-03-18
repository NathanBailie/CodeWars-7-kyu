// https://www.codewars.com/kata/5b1956a7803388baae00003a

const toUnderScore = s => s.replace(/([A-Z]|\d+)/g, '_$1').replace(/^_/, '').replace(/__/g, '_');