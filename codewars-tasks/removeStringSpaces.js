function noSpace(x) {
  let newStr = "";
  for (const char of x) {
    if (char !== " ") {
      newStr += char;
    }
  }
  return newStr;
}
const str = "test sample string";
console.log(noSpace(str));
