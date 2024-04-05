// https://www.codewars.com/kata/582dace555a1f4d859000058

const findAdmin = (list, lang) => list.filter(n => n.language === lang && n.githubAdmin === 'yes');