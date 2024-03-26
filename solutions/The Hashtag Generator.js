// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
    let res = str.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join('');
    if (res.length === 0 || res.length >= 140) return false;
    return `#${res}`;
}