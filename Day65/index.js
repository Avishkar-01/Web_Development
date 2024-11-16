
// let n = 5;
// let factorial = facto(n);
// console.log(factorial);
// let fact = 1;
// if(n===0) {
//     console.log("1");
// }else{
//     for (let i = 2; i <=n; i++) {
//         fact = fact * i;
//     }
//     console.log(fact);
// }

function factorial(n) {

    if(n===1) {
        return 1;
    }
    return n * factorial(n-1);

}

let n = 5;
console.log(factorial(n));
