// https://www.codewars.com/kata/583ea278c68d96a5fd000abd

function sortByLanguage(list) {
    return list.sort((a, b) => a.language.localeCompare(b.language) || a.firstName.localeCompare(b.firstName));
}