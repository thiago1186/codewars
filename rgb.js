function rgb(r, g, b){
  let objHex = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"};

  let result = [];
   
  for(let x = 0; x < arguments.length; x++){
    if(arguments[x] > 255){
      arguments[x] = 255;
    }

    if(arguments[x] < 0){
      arguments[x] = 0;
    }
    
    let resultNum = [];
    
    while(arguments[x] >= 16){
      resultNum.unshift(objHex[arguments[x]%16]);
      arguments[x] /= 16;
    }

    resultNum.unshift(objHex[parseInt(arguments[x])]);

    result.push(resultNum.join("").padStart(2,'0'));
  }

  return result.join("");

}
