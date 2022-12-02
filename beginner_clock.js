function past(h, m, s){
  return (h == 0) ? ((60000 * m) + (1000 * s)) : ((h * 3600000) + (60000 * m) + (1000 * s));
}
