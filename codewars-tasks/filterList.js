function filter_list(l) {
  let numArr = [];
  // Return a new array with the strings filtered out
  for (let i = 0; i < l.length; i++) {
    if (!isNaN(l[i])) {
      numArr.push(l[i]);
    }
  }
  return numArr;
}

console.log(filter_list([1, 2, "g", "h", 4])); //[1,2,4]
