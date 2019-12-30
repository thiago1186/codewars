var moveZeros = function (arr) {
  let other = [];
  let zeros = [];

  for(let x = 0; x < arr.length; x++){
    if(arr[x] === 0){
      zeros.push(arr[x]);
    }else{
      other.push(arr[x]);
    }
  }

  return [...other,...zeros];
}
