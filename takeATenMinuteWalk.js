function isValidWalk(walk) {
   if(walk.length != 10){
    return false;
  }

  let startPosition = [0,0];

  for(let direction of walk){
    switch(direction){
      case "n":{
        startPosition[1]++;
        break;
      }

      case "s":{
        startPosition[1]--;
        break;
      }

      case "w":{
        startPosition[0]--;
        break;
      }

      case "e":{
        startPosition[0]++;
        break;
      }
    }
  }
  
  return startPosition[0] == 0 && startPosition[1] == 0;
}
