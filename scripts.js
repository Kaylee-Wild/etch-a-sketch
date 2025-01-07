const grid = document.querySelector('.grid');

function changeGridSize() {
    let rowNum = prompt("Enter the size of the grid you want");
    //user will enter a number
    
    return parseInt(rowNum);
    //return user's number
};

    let rowNum = changeGridSize();

    const cellsPerRow = rowNum;
    const totalCells = rowNum * rowNum;

    const cellSize = (100 / cellsPerRow) - 1;

grid.innerHTML = ' ';

for (let i = 0; i < totalCells; i++) {
    const cellStyle = document.createElement('div');
    cellStyle.classList.add('cellStyle');

    cellStyle.style.width = `${cellSize}%`
    cellStyle.style.height = `${cellSize}%`

    grid.appendChild(cellStyle);

    cellStyle.addEventListener('mouseover', () => {
        cellStyle.style.backgroundColor = "blue"
    })
}

