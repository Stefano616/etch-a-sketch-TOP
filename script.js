const gridContainer = document.querySelector(".container");

function createDivGrid(size){
    for (let i = 0; i<(size*size); i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        
        gridContainer.appendChild(gridElement);
    }
    gridContainer.addEventListener('mouseover', (e)=>e.target.classList.add("hovered"));
    return size;
}

createDivGrid(16);