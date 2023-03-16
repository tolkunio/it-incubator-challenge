function squareDigits(num) {
  let res = "";
  sNum = num.toString();
  for (let i = 0; i < sNum.length; i++) {
    res = res + (sNum[i] * sNum[i]).toString();
  }
  return Number(res);
}

const a = 9119; //'9119'
console.log(squareDigits(a));
