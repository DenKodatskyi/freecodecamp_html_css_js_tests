
/*
  Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


/* ============================================================================================================== */

const truncateString = (str, num) => str.length <= num ? str : str.slice(0, num) + '...';

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


/* =================================== */
// function truncateString(str, num) {
//   if (str.length <= num) {
//     return str
//   }
//   let result = '';
//   for (let i = 0; i < num; i++) {
//     result += str[i]
//   }
//   return result + '...'
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

