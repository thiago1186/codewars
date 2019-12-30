var countBits = function(n) {
  let count = 0;
  
  while(n >= 2){
    if(n%2){
      count++;
    }
    
    n = parseInt(n/2);
  }
  
  if(n == 1){
    count++;
  }
  
  return count;
};
