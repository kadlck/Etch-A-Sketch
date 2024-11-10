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
       block.style.backgroundColor = "rgb(150, 150, 150)";
       block.addEventListener("mouseover", changecolor)
       gridBase.appendChild(block);
    }
}

function computeSize(number){
    let result = ((400-number+1)/number);
    return result
}

function changecolor(event){
    if (shading=="ON"){
        blockClass = event.currentTarget.getAttribute("class")
        const blockIwant = document.getElementsByClassName(blockClass)[0];
        oldColor = blockIwant.style.backgroundColor
        oldColor = oldColor.replace("rgb(", "")
        oldColor = oldColor.replace(")", "")
        oldColor = oldColor.split(",")
        if (oldColor.length == 3){
            let r = oldColor[0]
            let g = oldColor[1]
            let b = oldColor[2]
            let percentage= 0.25
            const shadeR = Math.round(Math.max(0, r - r * percentage)); // 92
            const shadeG = Math.round(Math.max(0, g - g * percentage)); // 46
            const shadeB = Math.round(Math.max(0, b - b * percentage)); // 138
            color = "rgb("+shadeR+","+shadeG+","+shadeB+")"
            console.log(color)
        }
        blockIwant.style.backgroundColor = color; 
    }else{
        blockClass = event.currentTarget.getAttribute("class")
        const blockIwant = document.getElementsByClassName(blockClass)[0];
        blockIwant.style.backgroundColor = color; 
    }
}

let height = 16
let width = 16
let color = "black"
    let shading = "OFF"
    let rainbow = "OFF"

function setUpButtons(){
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
    ShadeButton.textContent = "Shading: "+shading
    ShadeButton.style.backgroundColor= "rgb(233, 233, 233)"
    ShadeButton.addEventListener("click", function changeVariable(){
        if (shading=="ON"){
            shading = "OFF";
            ShadeButton.style.backgroundColor = "rgb(233, 233, 233)";
            ShadeButton.textContent = "Shading: "+shading     
        }
        else{
            shading = "ON";
            ShadeButton.style.backgroundColor = "brown";
            ShadeButton.textContent = "Shading: "+shading
        }
    })
    const heightButton = document.createElement("div");
    heightButton.classList.add("button", "space", "height");
    const upButton = document.createElement("button")
    upButton.classList.add("button", "space", "rolling");
    upButton.textContent = "HEIGHT UP"
    upButton.addEventListener("click", function addheight(){
        height += 1
        const gridBase = document.querySelector(".gridBase");
        gridBase.replaceChildren()
        createGrid(height, width)
    })
    const downButton = document.createElement("button")
    downButton.classList.add("button", "space", "rolling");
    downButton.textContent = "HEIGHT DOWN"
    downButton.addEventListener("click", function removeheight(){
        height -= 1
        const gridBase = document.querySelector(".gridBase");
        gridBase.replaceChildren()
        createGrid(height, width)
    })
    heightButton.append(upButton)
    heightButton.append(downButton)

    const widthButton = document.createElement("div");
    widthButton.classList.add("button", "space", "width");
    const WupButton = document.createElement("button")
    WupButton.classList.add("button", "space", "rolling");
    WupButton.textContent = "WIDTH UP"
    WupButton.addEventListener("click", function addheight(){
        width += 1
        const gridBase = document.querySelector(".gridBase");
        gridBase.replaceChildren()
        createGrid(height, width)
    })
    const WdownButton = document.createElement("button")
    WdownButton.classList.add("button", "space", "rolling");
    WdownButton.textContent = "WIDTH DOWN"
    WdownButton.addEventListener("click", function removeheight(){
        width -= 1
        const gridBase = document.querySelector(".gridBase");
        gridBase.replaceChildren()
        createGrid(height, width)
    })
    widthButton.append(WupButton)
    widthButton.append(WdownButton)

    command.appendChild(CreateButton);
    command.appendChild(ColorButton);
    command.appendChild(ShadeButton);
    command.appendChild(heightButton);
    command.appendChild(widthButton)
}

createGrid(height,width)
setUpButtons()
