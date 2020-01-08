function mineLocation(field){
  for(let x in field){
    for(let y in field[x]){
      if(field[x][y] == 1){
        return [+x,+y];
      }
    }
  }
}
