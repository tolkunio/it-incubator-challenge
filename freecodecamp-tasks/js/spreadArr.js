function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

//console.log(copyMachine([true, false, true], 2));
console.log(copyMachine([1, 2, 3], 5));
//[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
console.log(copyMachine([true, true, null], 1));
