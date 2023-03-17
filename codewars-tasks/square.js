/*Given an integral number, determine if it's a square number*/

var isSquare = function (n) {
  if (n < 0) {
    return false;
  }
  let sr = Math.round(Math.sqrt(n));
  return sr * sr == n;
};

// console.log(isSquare(-1));
// console.log(isSquare(0));
// console.log(isSquare(3));
console.log(isSquare(21));
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
