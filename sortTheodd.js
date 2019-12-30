function sortArray(array) {
    for(let x =0; x < array.length - 1; x++){
    if(array[x]%2 == 0){
      continue;
    }

    let menor = x;

    for(let y = x + 1; y < array.length; y++){

      if(array[y]%2 == 0){
        continue;
      }

      if(array[y] < array[menor]){
        menor = y;
      }
    }

    if(menor != x){
      [array[x],array[menor]] = [array[menor],array[x]];
    }
  }

  return array;
}
