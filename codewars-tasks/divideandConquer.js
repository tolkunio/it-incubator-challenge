function divCon(x) {
  let intSum = 0;
  let nonIntSum = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] == "number") {
      intSum += x[i];
    }
    if (typeof x[i] == "string") {
      nonIntSum += Number(x[i]);
    }
  }
  return intSum - nonIntSum;
}
console.log(divCon([9, 3, "7", "3"]));

// assert.strictEqual(divCon([9, 3, '7', '3']), 2);
// assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
// assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);
