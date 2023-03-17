function filter_list(l) {
  let numArr = [];
  // Return a new array with the strings filtered out
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] == "number") {
      numArr.push(l[i]);
    }
  }
  return numArr;
}

console.log(filter_list([1, 2, "aasf", "1", "123", 123])); //[1,2,4]
