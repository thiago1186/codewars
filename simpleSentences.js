function makeSentence(parts) {
  for(let x =  parts.length - 1; x >= 0; x--){
    if(parts[x] == "."){
      parts[x] = "";
    }else{
      break;
    }
  }

  let result = parts[0];

  for(let x = 1; x < parts.length; x++){
    if(parts[x] == ""){
      continue;
    }
    result+= parts[x] == "," ? parts[x] : " "+parts[x];
  }

  return result+".";
}
