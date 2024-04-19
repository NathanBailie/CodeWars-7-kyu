// https://www.codewars.com/kata/546f922b54af40e1e90001da

const alphabetPosition = (text) => text.toLowerCase().replace(/[^a-z]/g, '').split('').map((c) => c.charCodeAt() - 96).join(' ');