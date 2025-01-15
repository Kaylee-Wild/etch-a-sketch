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
            gameCell.style.backgroundColor = "blue";
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

window.onload = () => {
    createGrid();
};