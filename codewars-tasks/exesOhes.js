/*Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.*/

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  let strArr = str.toLowerCase().split("");
  for (let key in strArr) {
    if (strArr[key] == "o") {
      oCount++;
    }
    if (strArr[key] == "x") {
      xCount++;
    }
  }
  return oCount === xCount;
}

console.log(XO("ooxx")); //=> true
console.log(XO("xooxx")); //=> false
console.log(XO("ooxXm")); //=> true
console.log(XO("zpzpzpp")); //=> true // when no 'x' and 'o' is present should return true
console.log(XO("zzoo")); //=> false
