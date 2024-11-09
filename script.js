function createGrid(height, width){
    const gridBase = document.querySelector(".gridBase");
    gridBase.style.height = "400px"
    gridBase.style.width = "400px"
    gridBase.style.gap = "1px"
    for (let i =0; i < (height*width); i++){
       const block = document.createElement("div");
       block.classList.add("inside");
       block.style.width = computeSize(width) + "px";
       block.style.height = computeSize(height) + "px";
       gridBase.appendChild(block);
    }
}

function computeSize(number){
    let result = ((400-number+1)/number);
    return result
}

let height = 16
let width = 16

createGrid(height,width)
