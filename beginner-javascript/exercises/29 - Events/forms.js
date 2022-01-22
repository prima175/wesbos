const wes = document.querySelector('.wes');


wes.addEventListener('click', function(event){
    //event.preventDefault();
    const shouldChangePage = confirm (
        'this website might be malicious! ,do you wished to proceed?'
    );
        if (shouldChangePage){
          //  wiindow.location =  event.currentTarget.href
          event.preventDefault();
        }


});
const signupForm = document.querySelector('[name = "signup"]');
signupForm.addEventListener('submit' ,function(event){
//console.log(event);
//event.preventDefault();

const name = event.currentTarget.name.value;
if (name.includes('prima')){
    alert('sorry bro');
    event.preventDefault();
}



});

//keyup ,keydown,focus blur


const photo = document.querySelector('.photo');


function handlePhotoClick(event){
    if(event.type === "click"  || event.key === 'enter')
    console.log('you got clicked');

}

photo.addEventListener('click' ,handlePhotoClick);
photo.addEventListener('keyup' , handlePhotoClick);

