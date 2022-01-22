 function calculateBill(billamount, taxrate){
  console.log ('running calculate Bill!!!');
   const total =   billamount *( 1 + taxrate);
   console.log(total );  
   return total;
 }
 //const wes = 500;
 //const bos = .3;
 //const mytotal = calculateBill(wes , bos);
 //console.log(mytotal);


function doctorize ( name ){
    return  `dr.${name}`;
}
 function yell(name ){
     return `hey ${ name.toUpperCase()}`;
 }