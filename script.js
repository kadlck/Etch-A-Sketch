function createGrid(height, width){
    const gridBase = document.querySelector(".gridBase");
    gridBase.style.height = "400px"
    gridBase.style.width = "400px"
    gridBase.style.gap = "1px"
    for (let i =0; i < (height*width); i++){
       const block = document.createElement("div");
       block.classList.add("inside", i);
       block.style.width = computeSize(width) + "px";
       block.style.height = computeSize(height) + "px";
       block.addEventListener("mouseover", changecolor, false)
       gridBase.appendChild(block);
    }
}

function computeSize(number){
    let result = ((400-number+1)/number);
    return result
}

function changecolor(event){
    blockClass = event.currentTarget.getAttribute("class")
    const blockIwant = document.getElementsByClassName(blockClass)[0];
    blockIwant.style.backgroundColor = "black";
}

let height = 16
let width = 16

createGrid(height,width)
