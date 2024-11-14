console.log("This is the tutorial of functions in javascript");
function nice(name){
    console.log("Hey " + name + " You are nice");
    console.log("Hey " + name + " You are the best");
    console.log("Hey " + name + " You are coder");
    console.log("Hey " + name + " You are developer");
}

function sum(a , b , c=3) {
    return a+b+c;
}

let result1 = sum(3,5 , 1);  
let result2 = sum(2,5);  
let result3 = sum(3,4,0);  

console.log("The SUm of these numbers is ", result1);
console.log("The SUm of these numbers is ", result2);
console.log("The SUm of these numbers is ", result3);
nice("Avishkar");




const func1 = (x) =>{
    console.log("I am an Arrow Function",x);
}

func1(45);
func1(66);
func1(84);
