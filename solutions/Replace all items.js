// https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a

function replaceAll(seq, find, replace) {
    if (Array.isArray(seq)) { return seq.map(e => e === find ? replace : e); };
    return seq.split('').map(e => e === find ? replace : e).join('');
}