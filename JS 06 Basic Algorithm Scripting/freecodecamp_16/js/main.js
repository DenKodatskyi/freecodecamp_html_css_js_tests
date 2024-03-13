
/*
  Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

/* ============================================================================================================== */

const chunkArrayInGroups = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, index) => arr.slice(size * index, size * index + size))

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));



