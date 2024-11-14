console.log("I am Tutoroial on Loops");
let a = 1;
for (let i = 0; i < 100; i++) {
    
    console.log(a+i)
}


let obj={
    name: "Avi",
    role: "developer",
    company: "Apple"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element);
}

let i = 0;
while(i>0) {
    console.log(i);
    i++;
}

let b = 0;
do {
    b++;
} while (b<10);