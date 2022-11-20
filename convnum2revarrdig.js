function digitize(n) {
  let arr = String(n).split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]); 
  }
  return arr;
}
