function solution(str) {
  let strArr = str.split("");
  let resArr = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    resArr += strArr[i];
  }
  return resArr;
}

console.log(solution("world"));
