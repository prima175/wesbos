//const a = Number(document.querySelector('.a').value);
//const b = Number(document.querySelector('.b').value);
let result =document.querySelector('.result');


const plus = document.querySelector('.plus');

const addition = ()=> {
    const a = Number(document.querySelector('.a').value);
    const b = Number(document.querySelector('.b').value);
    const sum = a+b;

    console.log(a+b);
    
    result.innerHTML= sum

    console.log(result);
};

plus.addEventListener("click", addition );


const minus = document.querySelector('.minus');
const substract = () =>{
    const a = Number(document.querySelector('.a').value);
    const b = Number(document.querySelector('.b').value);
    const sub = a-b;
    console.log(a-b);
    result.innerHTML = sub
    console.log(result);
};
minus.addEventListener("click" , substract);

const multi =  document.querySelector('.multi');
const multiply = () =>{
    const a = Number(document.querySelector('.a').value);
    const b = Number(document.querySelector('.b').value);
    const amp = a * b;
    console.log (a*b);
    result.innerHTML = amp;
    console.log(result);
};
    multi.addEventListener("click",multiply);



 const division  = document.querySelector('.division');
 const divide = () =>{
    const a = Number(document.querySelector('.a').value);
    const b = Number(document.querySelector('.b').value);
     const split = a/b;
     console.log (a/b);
     result.innerHTML = split;
     console.log(result);
 }  ; 
 division.addEventListener("click", divide );








