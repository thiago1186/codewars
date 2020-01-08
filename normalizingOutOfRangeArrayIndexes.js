function normIndex(array, index){
  let normIndex;

  if(index < 0){
    index = index * -1 ;

    if(index > array.length){
      normIndex = array.length - (index%array.length);
    }else{
      normIndex = array.length - index;
    }
  }else{
    normIndex = index%array.length;
  }

  return array[normIndex];
}
