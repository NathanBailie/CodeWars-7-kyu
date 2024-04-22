// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

function factorial(n) {
    (n < 0 || n > 12) && (() => { throw new RangeError("n must be between 0 and 12") })();
    return n <= 1 ? 1 : n * factorial(n - 1);
}
