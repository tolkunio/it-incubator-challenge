function quickCheck(arr, elem) {
  let res = arr.indexOf(elem);
  if (res == -1) {
    return false;
  }
  return true;
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
