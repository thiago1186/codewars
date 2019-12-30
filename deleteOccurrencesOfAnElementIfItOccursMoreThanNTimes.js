function deleteNth(arr,n){
  let objRep = {};
  let result = [];

  for(let x = 0; x < arr.length; x++){

    objRep[arr[x]] = objRep[arr[x]] ? objRep[arr[x]] + 1 : 1;

    if(objRep[arr[x]] <= n){
      result.push(arr[x]);
    }
  }

  return result;
}
