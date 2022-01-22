console.log("it works");
/* eslint disable ....block all comment */
const name ='wes'
const middle ="prima"
const last =`bos`
const sentence = "she's  so \"cool\" "
;
//if not work use forward slash....escaped
const sentence2 =`she's not "cool"`
const hello ="my name is  "  + name + ".nice to meet you" 
const hello2 =`my name is  ${name } .nice to meet you.i am ${1+100} years old`
const html = `<div>
    <h2>
        ${name}
    </h2>
    <p>${hello2}</p>
</div>`
document.body.innerHTML =html;
