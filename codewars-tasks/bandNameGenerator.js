function bandNameGenerator(str) {
  let resultStr = "";
  let firstLetter = str.charAt(0);
  let lastLetter = str.charAt(str.length - 1);
  let restLetters = str.slice(1);

  resultStr = firstLetter.toUpperCase() + restLetters;

  if (firstLetter === lastLetter) {
    resultStr += restLetters;
  } else resultStr = `The ${resultStr}`;
  return resultStr;
}

console.log(bandNameGenerator("newsprint"));

console.log(bandNameGenerator("algebra"));
