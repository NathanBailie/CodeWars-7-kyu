// https://www.codewars.com/kata/57057a035eef1f7e790009ef

const onePunch = s => typeof s !== 'string' || s.length === 0 ? 'Broken!' : s.split(' ').sort().join(' ').replace(/[ae]/gi, '');