function duplicateEncode(word){
  let result = [];
  word = word.toLowerCase();

  for(let x = 0; x < word.length; x++){    
    let countLetter = 0;

    for(let y = 0; y < word.length; y++){
      if(countLetter == 2){
        break;
      }
      
      if(word[y] == word[x]){
        countLetter++;
      }
    }

    result.push(countLetter);
  }

  return result.join("").replace(/2/g,")").replace(/1/g,"(");

}
