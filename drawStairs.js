function drawStairs(n) {
  let result  = "";  

  for(let x = 0; x < n; x++){
    result += " ".repeat(x) + "I";

    if(x < n -1){
      result +="\n";
    }
  }

  return result;
}
