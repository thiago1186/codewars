function isIntArray(arr) {
  if(!arr){
    return false;
  }
  
  for(let x of arr){
    if(!Number.isInteger(x)){
      return false;
    }
  }
  
  
  return true;
}
