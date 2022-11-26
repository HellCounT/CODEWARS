var countBits = function(n) {
  n = n.toString(2);
  let arr = n.split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") sum++;
  }
  return sum;
};
