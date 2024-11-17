

let boxes = document.getElementsByClassName('box')
let r1 = Math.floor(Math.random()*5)
let r2 = Math.floor(Math.random()*5)
let r3 = Math.floor(Math.random()*5)
let r4 = Math.floor(Math.random()*5)
let colors = [ 'red' , 'aqua' , 'purple' , 'cyan' , 'orange']

boxes[r1].style.backgroundColor = colors[r2]
boxes[r2].style.backgroundColor = colors[r1]
boxes[r3].style.backgroundColor = colors[r2]
boxes[r4].style.backgroundColor = colors[r1]
