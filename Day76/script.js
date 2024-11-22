// function getData() {
//     //simulate getting the data from the server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     });
// }

async function getData() {
    //simulate getting the data from the server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}

async function main() {

    console.log("Loading module");
    console.log("Doing something else");
    console.log("Loading Data");
    let data = await getData()
    console.log(data);
    console.log("Processing Data");
    console.log("Task2");
}
main()
// data.then((v) => {
//     console.log(data);
//     console.log("Processing Data");
//     console.log("Task2");
// })