
/*
  Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.


/* ============================================================================================================== */

const findLongestWordLength = str =>
  Math.max(...str.split(' ').map((el) => el.length))

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));



