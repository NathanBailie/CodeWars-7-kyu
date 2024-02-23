// https://www.codewars.com/kata/58279e13c983ca4a2a00002a

function greetDevelopers(list) {
    return list.map(p => ({ ...p, greeting: `Hi ${p.firstName}, what do you like the most about ${p.language}?` }));
}