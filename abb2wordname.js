function abbrevName(name){
    let [fn, ln] = name.split(' ');
    return fn[0].toUpperCase() + '.' + ln[0].toUpperCase();
  }