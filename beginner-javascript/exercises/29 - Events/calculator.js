function Dis (value) {
    document.getElementById("display").value += value;
}

function solve() {
    let x = document.getElementById("display").value;
    let y = eval(x)
     document.getElementById ("display").value = y ;
}
function Clr() {
    document.getElementById("display").value = "" ;
}
