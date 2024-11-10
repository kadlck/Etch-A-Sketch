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
       block.style.backgroundColor = "grey";
       block.addEventListener("mouseover", changecolor)
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
    blockIwant.style.backgroundColor = color;
}


let height = 16
let width = 16
let color = "black"

function setUpButtons(){
    let shading = "OFF"
    let rainbow = "OFF"
    const command = document.querySelector(".command")
    const CreateButton = document.createElement("button");
    CreateButton.classList.add("button", "create");
    CreateButton.textContent = "New Grid"
    CreateButton.addEventListener("click", function holderTogether(){
        const gridBase = document.querySelector(".gridBase");
        gridBase.replaceChildren()
        createGrid(height, width)
    })
    const ColorButton = document.createElement("input");
    ColorButton.type = "color"
    ColorButton.classList.add("button", "color");
    ColorButton.addEventListener('input', function() {
        color = this.value;
    });
    const ShadeButton = document.createElement("button");
    ShadeButton.classList.add("button", "shade");
    ShadeButton.textContent = "I shade!"
    ShadeButton.addEventListener("click", function colorDarkeing(
        ////
    ){})
    const SpaceButton = document.createElement("button");
    SpaceButton.classList.add("button", "space");

    command.appendChild(CreateButton);
    command.appendChild(ColorButton);
    command.appendChild(ShadeButton);
    command.appendChild(SpaceButton);
}

createGrid(height,width)
setUpButtons()
