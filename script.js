
const grid = document.querySelector('.grid-container');
const colorBtns = document.querySelectorAll('.color-btns');
const resetBtn = document.querySelector('.reset-btn');
const colorPicker = document.querySelector('#color-picker');
const buttonsContainer = document.querySelectorAll('.buttons-container button');
const slider = document.querySelector('.slider');
const output = document.querySelector('#number-of-pixels');
let currentMode = 'black';
//Always load page with 16 x 16 grid
createGrid(16);

//EVENT LISTENERS 
resetBtn.addEventListener('click', resetGrid);
colorBtns.forEach(button => button.addEventListener('click', updateCurrentMode));
slider.addEventListener('mouseup', changePixelSize);


//CREATE GRID
function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('square');
    grid.appendChild(gridItem);
  } 
  let gridPixels = grid.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', changeColor));
}

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
            this.style.backgroundColor = currentMode;
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

//COLOR PICKER 
function updateColorPicker() {
    colorPicker.addEventListener('input', function() {
        currentMode = this.value;
    });
}

updateColorPicker()

//CHANGE COLOR OF BUTTON WHEN IN USE  
//The first for each loop is looping over each button in the node list and adding a click event listener to it using an anonymous function
//Within the anonymous function, another for each loop is used to loop through all the buttons in the node list and removes the class 'active' from all of them
// The last part is adding the class active to the button that was clicked, as this refers to the button element that was clicked on
function buttonClick() {
    buttonsContainer.forEach(button => button.addEventListener('click', function() {
    buttonsContainer.forEach(button => button.classList.remove('active'));
    this.classList.add('active');
  }));
}

buttonClick()

//CHANGE SIZE OF GRID WITH SLIDER
//This function updates the size of the grid by first removing all existing grid pixels
//then creates a new grid using the value from the slider
//The new grid size is determined by calling the createGrid function and passing in its current value
function changePixelSize() {
    let gridPixels = grid.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(slider.value);
}

//DISPLAY SIZE OF GRID
function updateSizeLabel() {
    slider.oninput = function() {
          output.textContent = `${this.value} x ${this.value}`;
      }
}

updateSizeLabel()
















