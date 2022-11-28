function check(a, x) {
  let res = false;
  for (let i = 0; i < a.length; i++) {
    if (x == a[i]) res = true;
  }
  return res;
}
