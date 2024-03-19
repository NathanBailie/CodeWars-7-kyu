// https://www.codewars.com/kata/56a4a3d4043c316002000042

const validateTime = time => /^(0?\d|1[0-9]|2[1-3]):(0[0-9]|[1-5][0-9])$/g.test(time);

// the best
// const validateTime = time => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(time)