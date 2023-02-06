// DOM NODES

const grid = document.querySelector('.grid-container');
const colorBtns = document.querySelectorAll('.color-btns');
const resetBtn = document.querySelector('.reset-btn');
let currentMode = ''

//EVENT LISTENERS 

colorBtns.forEach(button => button.addEventListener('click', updateCurrentMode));
resetBtn.addEventListener('click', resetGrid);


//CREATE GRID

function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('square');
    grid.appendChild(gridItem);
  }
  //grid pixels contains all divs inside grid
  //we add an event listener to all divs inside grid 
  let gridPixels = grid.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', changeColor));
}

createGrid()

//FUNCTION TO CHANGE THE COLOR OF THE GRID PIXELS

function changeColor() {
    switch (currentMode) {
        case 'black':
           this.style.backgroundColor = 'black';
           break;
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
        case 'eraser': 
            this.style.backgroundColor = 'white';
            break;
        default:
            this.style.backgroundColor = 'black';
            break;
    }
}



//UPDATE CURRENT MODE WHEN BUTTON IS CLICKED 

function updateCurrentMode(e) {
    switch (e.target.dataset.color) {
        case 'black':
            currentMode = 'black';
            break;
        case 'rainbow':
            currentMode = 'rainbow';
            break;
        case 'eraser':
            currentMode = 'eraser';
            break;
        default:
            currentMode = 'black';
            break;
    }
}

//FUNCTION TO RESET GRID 

function resetGrid() {
    let gridPixels = grid.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = 'white');
}

