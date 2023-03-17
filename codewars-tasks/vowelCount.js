function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
console.log(getCount("abracadabra"));
