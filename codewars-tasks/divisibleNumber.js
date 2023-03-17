/*takes two arguments and returns all numbers 
which are divisible by the given divisor. */
function divisibleBy(numbers, divisor) {
  let resultArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor == 0) {
      resultArr.push(numbers[i]);
    }
  }
  return resultArr;
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

//[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
