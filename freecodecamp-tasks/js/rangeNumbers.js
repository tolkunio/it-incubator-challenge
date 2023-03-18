function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    let nums = rangeOfNumbers(startNum, endNum - 1);
    nums.push(endNum);
    return nums;
  }
}
