"use strict";

module.exports = {
  Roman2Digit
};

function Roman2Digit(roman) {
  let digit = roman.match(/[IVXLCDM]/g);
  if (null === digit) {
    return null;
  }

  //console.log(digit);
  const DICT = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  //console.log(ROMAN);
  return DICT[roman];
}
