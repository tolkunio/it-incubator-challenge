function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log(countdown(10)); //should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
