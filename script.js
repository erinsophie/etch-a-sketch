// DOM NODES
//This grabs the already existing grid-container div 

const grid = document.querySelector('.grid-container');
const blackPixels = document.querySelector('.black-pixels');
const rainbowPixels = document.querySelector('.rainbow-pixels')

//EVENT LISTENERS 

blackPixels.addEventListener('click', changeColor);
rainbowPixels.addEventListener('click', changeColor);


//SET UP GRID 
//This loop creates a 16 * 16 grid by creating a new div element each iteration and setting its class to "square" then appending that square div to the parent element grid div

function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mousedown', changeColor);
    square.addEventListener('mouseover', changeColor);
    grid.appendChild(square);
  }
}

createGrid()
   
//COLORS

function changeColor() {
   this.style.backgroundColor = 'black';
}







