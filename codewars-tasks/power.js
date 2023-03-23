function numberToPower(number, power) {
  for (i = 1; i <= power; i++) {
    number *= i;
  }
  return number;
}

console.log(numberToPower(2, 3));
