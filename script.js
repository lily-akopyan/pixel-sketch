let grid = document.querySelector('.container');
let resetbtn = document.getElementById('resetbtn');
let gridsize = document.getElementById('gridsize');
createGrid(16);
hoverColor();
resetbtn.addEventListener('click', reset);

function createGrid(r) {
    for (let i = 0; i < r*r; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
    grid.style.gridTemplateColumns = `repeat(${r}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${r}, 1fr)`;
    gridsize.innerText = `${r}x${r}`;
}

function hoverColor(){
let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
});
}

function reset() {
    grid.innerHTML = '';
}