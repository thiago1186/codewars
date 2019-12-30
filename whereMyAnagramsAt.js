function anagrams(word, words) {
  function returnObj(str){
    let obj = {};

    for(let x = 0; x < str.length; x++){
      obj[str[x]] = obj[str[x]] ? obj[str[x]] + 1: 1; 
    }
    return obj;
  }

  function compareObjs(obj1,obj2){
    for(let key of Object.keys(obj2)){
      if(!obj1[key] || obj2[key] != obj1[key]){
        return false;
      }
    }
    return true;
  }

  let objWord = returnObj(word);
  let result = [];

  for(let w of words){
    if(w.length !== word.length){
      continue;
    }
    
    if(compareObjs(returnObj(word),returnObj(w))){
      result.push(w);
    }
  }

  return result;
}
