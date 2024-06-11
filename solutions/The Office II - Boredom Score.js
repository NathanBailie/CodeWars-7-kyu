// https://www.codewars.com/kata/57ed4cef7b45ef8774000014

function boredom(staff) {
    const scores = {
        'accounts': 1, 'finance': 2, 'canteen': 10,
        'regulation': 3, 'trading': 6, 'change': 6,
        'IS': 8, 'retail': 5, 'cleaning': 4,
        'pissing about': 25
    };
    let res = 0;

    for (let p in staff) res += scores[staff[p]];

    switch (true) {
        case res <= 80: return 'kill me now';
        case res > 80 && res < 100: return 'i can handle this';
        default: return 'party time!!';
    }
}