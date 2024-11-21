let button = document.getElementById("btn");
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b> yayy You are Clicked!!! </b>Nice";
});

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by right click plz");
});

button.addEventListener("keydown", ()=>{
    alert("Dont hack us by pressing any keys plz");
});

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box1").innerHTML = "<b> You are now became a Hacker!";
});