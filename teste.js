
var Wrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function refreshColor() {
    if(currentNumber <= 0) {
        Wrapper.style.color = 'red';
    } else{
        Wrapper.style.color = '#fff';
    }
}

function increment(){
    currentNumber = currentNumber +1;
    refreshColor();
    Wrapper.innerHTML = currentNumber;
    if( currentNumber >= 20){
        increment = false;
    } 
}

function decrement(){
    currentNumber = currentNumber -1;
    refreshColor();
    Wrapper.innerHTML = currentNumber;
    if( currentNumber <= -20){
        decrement = false;
    }
    
}


