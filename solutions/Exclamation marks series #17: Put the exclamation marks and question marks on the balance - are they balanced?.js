// https://www.codewars.com/kata/57fb44a12b53146fe1000136

function balance(left, right) {
    const count = s => [...s].reduce((sum, c) => sum + (c === '!' ? 2 : 3), 0);
    let l = count(left), r = count(right);
    return l > r ? 'Left' : (r > l ? 'Right' : 'Balance');
}