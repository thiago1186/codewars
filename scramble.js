function scramble(str1, str2) {
 if(str1.length < str2.length){
   return false;
 }

 let objStr1 = str1.split("").reduce((a,b) => {
    a[b] = a[b] ? a[b] + 1 : 1;
    return a;
   },{});

  let objStr2 = str2.split("").reduce((a,b) => {
    a[b] = a[b] ? a[b] + 1 : 1;
    return a;
   },{});

  let result = true;

 for(let letter of Object.keys(objStr2)){
   if(!objStr1[letter] || objStr1[letter] < objStr2[letter]){
     result = false;
     break;
   }
 }

  return result;
}
