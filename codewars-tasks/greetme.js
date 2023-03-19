var greet = function (name) {
  let firstElUpper = name.charAt(0).toUpperCase();
  console.log(firstElUpper);
  let restEl = name.slice(1);
  return `Hello ${firstElUpper}${restEl}!`;
};
console.log(greet("billy"));
