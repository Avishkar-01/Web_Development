let a = 6;

function factorial(number) {
    let arr = Array.from(Array(number+1).keys()) 
    let c = arr.splice(1,).reduce((a,b)=>{
        return a * b;
    })
    return c;
}


function facFor(number) {
    let fac = 1;
    for (let i = 1; i <= number; i++) {
        fac = fac * i;
    }
    return fac;
}
console.log(factorial(a));
console.log(facFor(a));