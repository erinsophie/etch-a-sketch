// DOM NODES
//This grabs the already existing grid-container div 

const grid = document.querySelector('.grid-container');

//SET UP GRID 
//This loop creates a 16 * 16 grid by creating a new div element each iteration and setting its class to "square" then appending that square div to the parent element grid div

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
}

