// let obj = {
//     a:1,
//     b:"Avi"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__  = animal; //sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name){
        this.name = name;
        console.log("Object is Created");
    }
    eats() {
        console.log("Kha rha hu");
    }
    jumps() {
        console.log("Jumping");
    }
}

class Lion extends Animal{
    constructor(name) {
        super(name);
        console.log("Object is created for lion");
    }
    eats() {
        console.log("Lion is Having Dinner");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l); 