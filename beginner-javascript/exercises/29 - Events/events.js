const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

function handleClick(){
    console.log ('it got clicked');

}

const hooray = () => console.log('HOORAY!');
butts.addEventListener('click', handleClick);
cool.addEventListener('click', hooray);
butts.removeEventListener('click',handleClick);
//it cannot remove an annoymous function .so always define it before;




//listen on multiple item 
const buyButtons = document.querySelectorAll('.buy');

//function buyItem () { 
   // console.log ('buying item');
//} 

//buyButtons.forEach(function(buyButton){
  //  console.log ('binding the buy button');
//    buyButton.addEventListener('click' ,buyItem);

  // buyButton.innerHTML = buyItem;
//}
//)


//function handleBuyButtonClick (oprah){
//  console.log ('binding the buy button');

  ////  oprah.addEventListener('click',buyItem);
//}

function handleBuyButtonClick(event){
    const button = event.target;
    console.log (button.textContent);
    console.log (event.currentTarget);
   // console.log ('you are buying it');
   // console.log(parseFloat (event.target.dataset.price));
event.stopPropagation();

  }
buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click',handleBuyButtonClick);
}
);
window.addEventListener('click',function(){
  console.log('you clicked the window');
});
const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', e => {
  console.count(e.currentTarget);
  console.log(this);//not use this

});














