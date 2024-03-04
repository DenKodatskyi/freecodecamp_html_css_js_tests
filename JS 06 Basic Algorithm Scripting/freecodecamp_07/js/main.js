
/*
  Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.


/* ============================================================================================================== */

const repeatStringNumTimes = (str, num) => Array.from({ length: nem }, _ => str).join('');
repeatStringNumTimes("abc", 3);


/* ============================================== */
// function repeatStringNumTimes(str, num) {
//   let result = '';
//   for (let i = num; i > 0; i--) {
//     result += str;
//   }
//   return result
// }

// console.log(repeatStringNumTimes("abc", 3));

/* ============================================== */
// function repeatStringNumTimes(str, num) {
//   return str.repeat(num);
// }

// repeatStringNumTimes("abc", 3);



