// https://www.codewars.com/kata/584e93a70f60247eb8000132

const perfectSquare = s => !s.split('\n').some(e => e.length !== s.split('\n').length || /,/.test(e));