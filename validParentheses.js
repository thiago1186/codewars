function validParentheses(parens){
  let count = 0;

  for(let s of parens){
    if(s == "("){
      count++;
    }

    if(s == ")"){
      count--;
    }

    if(count < 0){
      return false;
    }
  }

  return count == 0;
}
