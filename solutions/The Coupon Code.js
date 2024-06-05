// https://www.codewars.com/kata/539de388a540db7fec000642

const checkCoupon = (entCode, corrCode, currDate, expDate) => entCode === corrCode && new Date(currDate) <= new Date(expDate);