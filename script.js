const gridContainer = document.querySelector(".container");
const newGridBtn = document.querySelector("#newGridBtn");
let gridSize = 16;
let gridSizeIsValid = false;

newGridBtn.addEventListener('click', ()=> {
    inputGridSize = prompt('Insert the desired grid size');
    gridSizeIsValid = checkValidGridSize(inputGridSize);
    if (gridSizeIsValid){
        gridSize = Number(inputGridSize);
        createGrid(gridSize);
        return gridSize;
    } else {
        alert('Please enter a valid number lower than 100 =)');
    } 
}
);

function checkValidGridSize(size){
    if (size === ''|| Number(size)>100 || isNaN(size)){
        return false;
    }
    else {
        return true;
    }

}

function createGrid(size){
    gridContainer.textContent='';
    for (let i = 0; i<(size*size); i++){
        const gridElement = document.createElement("div");
        gridElement.style.width = `${(100 / size)}%`;
        gridElement.classList.add("grid-element");
        gridContainer.appendChild(gridElement);
    }
    gridContainer.addEventListener('mouseover', (e)=>e.target.classList.add("hovered"));
    return size;
}

createGrid(gridSize);