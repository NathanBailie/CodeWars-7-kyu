// https://www.codewars.com/kata/5672682212c8ecf83e000050

function dblLinear(n) {
    let u = [1], yi = 0, zi = 0;

    while (u.length <= n) {
        let y = 2 * u[yi] + 1, z = 3 * u[zi] + 1;
        y < z ? (u.push(y), yi++) : y > z ? (u.push(z), zi++) : (u.push(y), yi++, zi++);
    }

    return u[n];
}