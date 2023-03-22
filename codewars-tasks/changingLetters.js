function swap(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  return string.replace(/[aeiou]/g, (v) => v.toUpperCase());
}

console.log(swap("hello"));
