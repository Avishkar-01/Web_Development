console.log("Hello I am Conditional tutorial")


let age = 0;
// let grace = 2;
let a = 2;
let b = 3;

console.log((a>b) ? (a-b) : (b-a));
console.log(a);
console.log(b);
// console.log(age+grace);
// console.log(age-grace);
// console.log(age*grace);
// console.log(age/grace);
// console.log(age**grace); //exponential
// console.log(age%grace); //modulus 

if(age == 18) {
    console.log("You can Drive");
}else if(age==0){
    console.log("Are you kidding?")
}
else {
    console.log("You cannot drive");
}