function generateHashtag (str) {
  if(!str.trim().length){
    return false;
  }

  let hashTag = "#"+str.split(" ").map(x => x.charAt(0).toUpperCase()+x.slice(1)).join("");

  if(hashTag.length > 140){
    return false;
  }

  return hashTag;
}
