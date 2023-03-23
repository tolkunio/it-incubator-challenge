function solution(str, ending) {
  return str.endsWith(ending);
}
solution("abc", "bc"); // returns true
solution("abc", "d"); // returns false

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

console.log(lowToday);
