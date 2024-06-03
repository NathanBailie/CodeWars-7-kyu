// https://www.codewars.com/kata/55908aad6620c066bc00002a

const XO = str => (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;