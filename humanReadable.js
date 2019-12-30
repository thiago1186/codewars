function humanReadable(seconds) {
  let result = [];

  result.unshift((seconds%60).toString().padStart(2,'0'));
  seconds = parseInt(seconds/60); 

  result.unshift((seconds%60).toString().padStart(2,'0'));
  seconds = parseInt(seconds/60); 
  
  result.unshift(seconds.toString().padStart(2,'0'));

  let total = result.length;  
  
  for(let x = 0; x < 3 - total; x++){
    result.unshift("00");
  }

  return result.join(":");
}
