var locate = function(arr,value){
  let result = false;

  for(let x of arr){
    if(Array.isArray(x)){
      result =  locate(x,value);
    }else if(x ==  value){
      result = true;
      break;
    }
  }

  return result;
}
