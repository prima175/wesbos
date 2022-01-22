const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);

});

//console.table(people);
//function doALotOfStuff(){
//console.group( 'doing some stuff');
//console.log('hey i am fine');
//console.warn('watch out');
//console.error('hey');
//console.groupEnd( 'doing some stuff');
//}


// Console Methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requestss

// Break On Attribute

// Some Setup Code

function doctorize(name) {
 // console.count ('running doctorize');
  return `Dr. ${name}`;
}

function greet(name) {
  
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
