// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(n) {
    return [...Array(n)].map((_, i) => ' '.repeat(n - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(n - i - 1));
}