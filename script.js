let grid = document.querySelector('.container');
let resetbtn = document.getElementById('resetbtn');
let gridsize = document.getElementById('gridsize');
let eraserbtn = document.getElementById('eraserbtn');
let color = "black";
createGrid(16);
resetbtn.addEventListener('click', reset);
eraserbtn.addEventListener('click', eraser);

function createGrid(r) {
    for (let i = 0; i < r * r; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener("mouseover", hoverColor);
        grid.appendChild(div);
    }
    grid.style.gridTemplateColumns = `repeat(${r}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${r}, 1fr)`;
    gridsize.innerText = `${r}x${r}`;
}

function hoverColor() {
    this.style.backgroundColor = `${color}`;
}

function eraser() {
    
}

function reset() {
    grid.innerHTML = '';
    createGrid(16);
}