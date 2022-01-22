console.log ('it works')
const myParagraph = document.createElement('p');
myParagraph.textContent= 'i am a P';
myParagraph.classList.add('special');
console.log(myParagraph);



const myImage = document.createElement('img');
myImage.src= 'https://picsum.photos/500';
myImage.alt = 'nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log (myDiv);


document.body .appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);



const heading = document.createElement('h2');
heading.textContent = 'cool things ';

myDiv.insertAdjacentElement('beforeBegin', heading);




const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

document.body .insertAdjacentElement('afterbegin',list);

const li5 = document .createElement('li');
li5.textContent = 'five ';
list .append (li5);
const li1 = li5.cloneNode(true );
li1.textContent = 'one';
list.insertAdjacentElement('afterBegin',li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin',li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('beforeEnd',li2);


