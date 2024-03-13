// https://www.codewars.com/kata/539ee3b6757843632d00026b

const capitals = w => [...w].reduce((acc, c, i) => { /[A-Z]/.test(c) && acc.push(+i); return acc; }, []);