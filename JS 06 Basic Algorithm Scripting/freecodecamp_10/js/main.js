
/*
  Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

/* ============================================================================================================== */

function booWho(bool) {
  return bool === false || bool === true;
  //  return typeof bool === 'boolean';
}

console.log(booWho(null));



