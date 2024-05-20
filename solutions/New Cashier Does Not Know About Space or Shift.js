// https://www.codewars.com/kata/5d23d89906f92a00267bb83d

function getOrder(str) {
    const menu = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];
    return menu.flatMap(x => str.match(new RegExp(x, 'g')) || []).map(w => w.replace(/^\w/g, c => c.toUpperCase())).join(' ');
}