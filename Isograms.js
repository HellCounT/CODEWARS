function isIsogram(str){
  return (str.length == new Set(str.toUpperCase()).size) ? true : false;
}
