function blocks(s) {
  let obj = {};
  let result = [],lower = [],upper = [],digits = [];
  let str = "";

  for(let x of s){
    obj[x] = obj[x] ? obj[x] + 1 : 1;

    if(!result[obj[x] - 1]){
      result[obj[x] - 1] = [];
    }

    result[obj[x] - 1].push(x);
  }

  for(let x in result){
    str = result[x].join("");
    
    lower = (str.match(/[a-z]/g) || []).sort();
    upper = (str.match(/[A-Z]/g) || []).sort();
    digits = (str.match(/\d/g) || []).sort((a,b) => a - b);

    result[x] = lower.join("")+upper.join("")+digits.join("");
  }

  return result.join("-");
}
