let arr = [1,2,4,5,7];

console.log(arr);
console.log(typeof(arr));
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop());
console.log(arr.push("Harry"));
console.log(arr.shift());
console.log(arr.unshift("avi"));
console.log(arr);
console.log(arr.sort())


let a = [1,3,4,5,7,9,88];

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

a.forEach((value,index,arr)=>{
    console.log(value,index,arr);
}); 

let obj1= {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
        const element = obj1[key];
        console.log(element);
    }
}

let newarr= a.map((e,index,array)=>{
    return e**2;
});
console.log(newarr);