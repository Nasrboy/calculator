//CALCULATOR PROGRAM

const display = document.getElementById("display");


//send inputs to display
function appendToDesplay(input){
    display.value = display.value + input;
}
//clear all inputs after getting answer or throw an error
function clearDisplay(){
    display.value="";  
    
}
// calculate all values
function calculate(){
    try{
         display.value = eval(display.value);
    }
    catch(error){
        display.value= "Syntax Error";

    }
   
}