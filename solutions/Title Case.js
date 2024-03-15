// https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(str, words = '') {
    return !str ? '' : str.toLowerCase().split(' ').map((e, i) => (i === 0 || !words.toLowerCase().split(' ').includes(e)) ? e.replace(/./, c => c.toUpperCase()) : e).join(' ');
}