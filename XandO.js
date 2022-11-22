function XO(str) {
    let arr = str.toLowerCase().split("");
    let xc = 0;
    let oc = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "x") xc++;
      if (arr[i] === "o") oc++;
    }
    return (xc === oc) ? true : false;
  }