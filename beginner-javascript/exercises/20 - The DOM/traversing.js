const wes = document.querySelector('.wes');
console.log (wes.children );
console.log (wes.childNodes);


const p = document.createElement('p');
p. textContent = 'I WILL BE REMOVED';
document.body.appendChild(p);
p.remove();
console.log(p);


document.body.appendChild(p);


