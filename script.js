// DOM NODES

const grid = document.querySelector('.grid-container');
const blackBtn = document.querySelector('.black-button');
const rainbowBtn = document.querySelector('.rainbow-button');
let currentMode = 'black'


//EVENT LISTENERS 


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
  gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', changeColor))
}

createGrid()

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}