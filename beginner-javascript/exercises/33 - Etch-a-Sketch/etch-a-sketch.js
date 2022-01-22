//get the element from the canvas 
const canvas  = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const  MOVE_AMOUNT = 10
//make a variable called height and width from the same property on our canvas
const {width ,height} = canvas ;
//create random x y starting points on the canvas 
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

const shakebutton = document.querySelector('.shake');
//setup our canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'square';
ctx.lineWidth= 10;
//start the drawiing
let hue = 0;
ctx.strokeStyle = `hsl(${hue} ,100% ,50%)`;
ctx.beginPath ();
ctx.moveTo(x,y);
ctx.lineTo(x ,y);
ctx.stroke();

//wriite  handler for a key
function handleKey(e){
    if(e.key.includes('Arrow')){
        e.preventDefault();
        //console.log(e.key);
       // console.log ('handling key');
       draw({key:e.key});
    }
    
}
///Write a draw function
function draw ({key}){
    hue+= 50;
    ctx.strokeStyle = `hsl(${hue} ,100% ,50%)`;


    console.log (key);

    ctx.beginPath();
    ctx.moveTo(x,y);
switch (key){
    case 'ArrowUp':
        y-= MOVE_AMOUNT
        break;
    case 'ArrowRight':
        x+= MOVE_AMOUNT
        break;
    case 'ArrowDown':
        y+= MOVE_AMOUNT
        break;
    case  'ArrowLeft':
        x-= MOVE_AMOUNT
        break;
    


        default:
        break;
}



    // x -= MOVE_AMOUNT;
    // y -=MOVE_AMOUNT;
    ctx.lineTo(x,y);
    ctx.stroke();

}









//listen for arrow key

window.addEventListener( 'keydown' , handleKey);





