let a = prompt('Enter first number')

let b = prompt('Enter Second Number')



let sum = parseInt(a) + parseInt(b)

function main() {
    let x = 1;

    try {
        console.log("The sum After Ops is " + sum*x);
        return true;
    } catch (error) {
        console.log("Error occured bro");
        return false;
    }

    finally{
        console.log("Files are being closed and db is also getting closed")
    }


}

let c = main()