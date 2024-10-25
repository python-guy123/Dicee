var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;' ];
var stop = true;
var x;

function change() {
    var random = Math.floor(Math.random()*6)
    document.getElementById("dice-div").innerHTML = dices[random]
}
function stopstart(){
    if(stop){
        stop = false;
        var x = setInterval(change, 100);

    }
    else {
        clearInterval(x);
        stop = true;
        
    }
}
window.onload = function(){
   stopstart();
}