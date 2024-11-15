console.log("Solution of Exercise 9 -> Faulty Calculator")

// Faulty Calculator

/*
Create a faulty Calculator

1: It takes two numbers as input from user
2: It should perform the operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times
 */

let random = Math.random()
alert(`${random}`);
let a = prompt("Enter First Number")
let c = prompt("Enter Operation You want to perform")
let b = prompt("Enter Second Number")


let obj = {
    '+': '-',
    '*': '+',  
    '-': '/',
    '/': '**'
}

console.log(random);

if(random<0.1) {
    c=obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}else {
    //perform the correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}