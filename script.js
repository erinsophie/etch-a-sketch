// DOM NODES

const grid = document.querySelector('.grid-container');
const colorBtns = document.querySelectorAll('.color-btns');
const resetBtn = document.querySelector('.reset-btn');
const buttonsContainer = document.querySelectorAll('.buttons-container button')
let currentMode = ''

//EVENT LISTENERS 
resetBtn.addEventListener('click', resetGrid);
colorBtns.forEach(button => button.addEventListener('click', updateCurrentMode));

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

//FUNCTION TO RESET GRID PIXELS
function resetGrid() {
    let gridPixels = grid.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = 'white');
}

//CHANGE COLOR OF BUTTON WHEN IN USE  
//The first for each loop is looping over each button in the node list and adding a click event listener to it using an anonymous function
//Within the anonymous function, another for each loop is used to loop through all the buttons in the  node list and removes the class active from all of them
// The last part is adding the class active to the button that was clicked, as this refers to the button element that was clicked on
buttonsContainer.forEach(button => button.addEventListener('click', function() {
    buttonsContainer.forEach(button => button.classList.remove('active'));
    this.classList.add('active');
  }));




