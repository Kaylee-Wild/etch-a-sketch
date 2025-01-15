function createGrid(rows = 16) {
    const gameArea = document.querySelector('.gameArea');
    gameArea.innerHTML = ''; // Clear existing grid

    const totalCells = rows * rows;

    for (let i = 0; i < totalCells; i++) {
        const gameCells = document.createElement('div');
        gameCells.classList.add('gameCells');
        gameArea.appendChild(gameCells);
        gameCells.addEventListener('mouseover', () => {
            gameCells.style.backgroundColor = "blue";
        });
    }

    const cellSize = 500 / rows;
    document.querySelectorAll('.gameCells').forEach(item => {
        item.style.width = `${cellSize}px`;
        item.style.height = `${cellSize}px`;
    });
}

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