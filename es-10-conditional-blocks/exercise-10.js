function sumUntil(maxValue) {
  let sum = 0;
  for (let n = 1; n <= maxValue ; n++) {
   sum += n;
 }
 return sum;
}

console.log(sumUntil(5));
