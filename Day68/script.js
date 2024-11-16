console.log("Avi")

let BhupendraJogis = document.getElementsByClassName("Box")
console.log(BhupendraJogis);

// BhupendraJogis[2].style.backgroundColor = "red";

// document.getElementById("redbox").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "Yellow";

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "yellow";
})