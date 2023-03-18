function periodIsLate(last, today, cycleLength) {
  let lastDayCount = last.getTime();
  let todayDayCount = today.getTime(); //get time value in millisecunds
  let diff = todayDayCount - lastDayCount;
  let totalDays = Math.ceil(diff / (1000 * 3600 * 24));
  return totalDays > cycleLength;
}
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
