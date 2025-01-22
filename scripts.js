function createGrid(rows = 16) {
    const gameArea = document.querySelector('.gameArea');
    gameArea.innerHTML = ''; // Clear existing grid

    const totalCells = rows * rows;
    const cellSize = 500 / rows;

    for (let i = 0; i < totalCells; i++) {
        const gameCell = document.createElement('div');
        gameCell.classList.add('gameCells');
        gameCell.style.width = `${cellSize}px`;
        gameCell.style.height = `${cellSize}px`;
        gameArea.appendChild(gameCell);
        
        gameCell.addEventListener('mouseover', () => {
            gameCell.style.backgroundColor = "black";
        });
    }
};

function changeGridSize() {    
    const rows = prompt("Enter the number of rows/columns (1-100):", 16);

    if (rows < 1 || rows > 100 || isNaN(rows)) {
        alert("Enter a valid number between 1 and 100");
        return;
    }

    createGrid(parseInt(rows));

}

function clearGrid() {
    const gameCell = document.querySelectorAll(".gameCells");

    gameCell.forEach(gameCell => {
        gameCell.style.backgroundColor = "white";
    });

}

window.onload = () => {
    createGrid();
};





/*
To Do Check List

color option for random RGB (Rainbow)
    create button that when clicked >
    mouseover event listener
    gameCell.style.backgroundColor = random color instead of a set color



shading and lightening button (Darken and Lighten)
    create a button that when clicked >
    mouseover event listener
    gameCell.style.backgroundColor = color 10% darkened or lightend



color wheel - create a new branch for this
    https://www.youtube.com/watch?v=1INseXMXuvE




eraser
    create a button that when clicked >
    mouseover event listener
    gameCell.style.backgroundColor = white




clear grid button
    create a button in html
    when button is clicked > run clearGrid()
    clearGrid() changes the background style for everything with the class gameCell to white





rather than a pop up, slider for selecting grid size - create a new branch for this
    https://www.youtube.com/watch?v=3Eb6FtjkZ_k





*/