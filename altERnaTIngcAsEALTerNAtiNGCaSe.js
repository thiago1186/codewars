String.prototype.toAlternatingCase = function () {
  let result = "";
  this.split("").map(x => {
    if(x == x.toUpperCase()){
      result += x.toLowerCase();
    }else{
      result += x.toUpperCase();
    }
  });

  return result;
}
