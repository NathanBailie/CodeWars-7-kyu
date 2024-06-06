// https://www.codewars.com/kata/57ed30dde7728215300005fa

const bump = x => x.replace(/[^n]/g, '').length <= 15 ? 'Woohoo!' : 'Car Dead';