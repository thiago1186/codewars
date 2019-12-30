function persistence(num) {
   num = num.toString();
   let passos = 0;

   while(num.length > 1){

     let conta = parseInt(num[0]);

     for(let x = 1; x < num.length; x++){
       conta *= parseInt(num[x]);
     }
     
     passos++;
     num = conta.toString();
   }
  
   return passos;
}
