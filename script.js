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

        gridElement.addEventListener('mouseover', (e)=>{
            const stepIncreaseAlphaValue = 0.1;
            return changeAlphaValue(e.target, stepIncreaseAlphaValue);
        });
        
        gridContainer.appendChild(gridElement);
    }

    // Issues related to bubbling event parent-child - Needs a fix
    // gridContainer.addEventListener('mouseover', (e)=>{
    //     if(e.bubbles){
    //         const stepIncreaseAlphaValue = 0.1;
    //         console.log(e.target); 
    //         return changeAlphaValue(e.target, stepIncreaseAlphaValue);
    //     } else {
    //         e.stopPropagation();
    //         return e.target;
    //     }
    // });

    return size;
}
function changeAlphaValue(element, stepIncrease){
    const currentValue = getComputedStyle(element).getPropertyValue('background-color');
    const parts = currentValue.match(/[\d.]+/g);
    console.log('before modification: ' + parts);
    if(parts.length ===3){
        parts.push(1);
    }
    parts[3]= Number(parts[3]) + stepIncrease;
    console.log('after modification: ' + parts);
    return element.style.backgroundColor = `rgba(${parts.join(',')})`;
}

createGrid(gridSize);