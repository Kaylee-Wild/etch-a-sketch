const grid = document.querySelector('.grid');

for (let i = 0; i < 256; i++) {
    const cells = document.createElement('div');
    cells.classList.add('cells');
    grid.appendChild(cells);
    

    //changing the css class isn't working to change the background color of the div
    //going to try DOM style background change instead
    
    document.querySelectorAll('.cells').forEach((item) => {
        item.addEventListener('mouseover', () => {
            cells.style.backgroundColor = "blue"
            //changes the background of ALL cells, want it to change just the one

            
        })
    })
    



}