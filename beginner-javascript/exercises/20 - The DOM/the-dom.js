//const p = document . querySelector('p');
//const divs = document.querySelector('div');
//console.log (p);
//console.log (divs );
//const imgs = document.querySelectorAll('item img');
//const item2 = document. querySelector('.item2');
//const item2Image = item2.querySelector('img');
//const heading = document.querySelector('h2');
//console.dir(heading.textContent);
//heading.textContent = 'wes is cool';
//console.log (heading.textContent);
//console.log (heading.innerText);
const pic = document .querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');
console .log (pic.classList);
function toggleRound(){
  pic.classList.toggle('round')  ;

}
pic.addEventListener('click ', toggleRound);

document.querySelector('.nice').addEventListener('click', torfunction)