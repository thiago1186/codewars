function sumOfDifferences(arr) {
  arr = arr.sort((a,b) => b - a);
  
  let result = 0;

  for(let x = 0; x < arr.length - 1; x++){
    result += arr[x] - arr[x+1];
  }

  return result;
}
