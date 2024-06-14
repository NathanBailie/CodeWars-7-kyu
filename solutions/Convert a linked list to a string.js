// https://www.codewars.com/kata/582c297e56373f0426000098

function stringify(list) {
    let res = '';
    while (list !== null) {
        res += `${list.data} -> `;
        list = list.next;
    }
    return res + 'null';
}