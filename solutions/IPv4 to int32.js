// https://www.codewars.com/kata/52ea928a1ef5cfec800003ee

const ipToInt32 = ip => ip.split('.').map(Number).reduce((acc, n, i) => acc + n * 256 ** (3 - i), 0);