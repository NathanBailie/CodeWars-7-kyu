// https://www.codewars.com/kata/59901fb5917839fe41000029

function numericFormatter(template, num = '1234567890') {
    let index = 0;
    return template.replace(/[a-zA-Z]/g, () => num[index++ % num.length]);
}