// https://www.codewars.com/kata/5375f921003bf62192000746

const abbreviate = s => s.replace(/\w{4,}/g, w => w[0] + (w.length - 2) + w[w.length - 1]);