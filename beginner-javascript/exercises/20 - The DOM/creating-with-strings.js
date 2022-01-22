console.log('it works');
const item =document.querySelector('.item');

const src = `https://picsum.photos/200`;
const desc = `cute pup <h1> LOVE THIS GUY</h1> `;
const myHTML = `
<div class = "wrapper">
<h2>cute${desc}<h2>
<img src = "${src}" alt = "${desc}"/>
</div>`;
//console.log(myHTML.classList);
//console.log(typeof myHTML)
//item.innerHTML = myHTML;

//const itemImage = document.querySelector('.wrapper img');
//itemImage.classList.add('round');
//console.log(itemImage);

const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.appendChild(myFragment);
