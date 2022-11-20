function vaporcode(string) {
    const arrstr = string.split('');
    var resarr = [];
    for (var i = 0; i < arrstr.length; i++) {
      if (arrstr[i] !== " ") {
      resarr.push(arrstr[i].toUpperCase() + "  ");
      }
    }
    var res = resarr.join("");
    res = res.substring(0, res.length - 1);
    res = res.substring(0, res.length - 1);
    return res;
  }  