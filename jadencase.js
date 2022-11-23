String.prototype.toJadenCase = function () {
    
    var arr = this.split("");
    arr[0] = arr[0].toUpperCase();
   
    for (let i = 1; i < arr.length; i++) {
      if ( arr[i] == " " ) {
        arr[i+1] = arr[i+1].toUpperCase();
      }
    }

    str = arr.join("");
    return str;
  };