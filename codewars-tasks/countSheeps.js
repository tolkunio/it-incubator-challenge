function countSheeps(arrayOfSheep) {
  let summ = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    summ += Boolean(arrayOfSheep[i]);
  }
  return summ;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
