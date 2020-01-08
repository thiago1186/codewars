function digital_root(n) {
  let sum = 0;
  n = ""+n;
  
  while(n.length > 1){
    for(let x of n){
      sum += +x;
    }

    n = ""+sum;
    sum = 0;
  }
  
  return +n;
}
