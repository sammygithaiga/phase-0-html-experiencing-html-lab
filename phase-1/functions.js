//functions
//paramet-variales that are placed inside a functioners 
//arguments-values that are passed when calling/ivocking

//1.creating functions using keywords
//snytax
function functoinName (){
    console.log('i am inside a function');
}
//in order for a declared function to work/to be executed
//we have o call/invoke
const firstName = `John`

console.log(firstName);

console.log(`${firstName} Doe`);

function greetings(firstName ,timeofday) {
    console.log('good morning, John havea nice day');

}

function greetJane(){
    console.log('Good morning ,Jane have a nice day');
}
greetings('Tony');


//greetings( 'chebet');

//greetings( 'Nome');

//greetings( `Jamo`);
//console.log(greetJane);

greetJane('Tony','morning')
console.log('moringa'.slice(0, 3));
console.log('moringa'.toUpperCase);

function capitilize(str){
    console.log(str[0]);
}




//2.arrow functions
//syntax
const capitilizefirstletter = (str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const 


//in js functions are reffered to as first class ie;functios are as  any other values
//callback functions -functions passed onto other functions as values