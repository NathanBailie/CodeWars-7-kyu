// https://www.codewars.com/kata/5865a28fa5f191d35f0000f8

const takeUmbrella = (w, c) => (w === 'rainy') || (w === 'cloudy' && c > 0.20) || (w === 'sunny' && c > 0.50);