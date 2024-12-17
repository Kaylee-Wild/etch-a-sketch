const grid = document.querySelector('.grid');

for (let i = 0; i < 256; i++) {
    const cells = document.createElement('div');
    cells.classList.add('cell');
    grid.appendChild(cells);
}

