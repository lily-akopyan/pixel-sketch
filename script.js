let grid = document.querySelector('.container');
// let rows = Number(prompt("number of rows")); //prompt for testing
// let s = Math.pow(rows, 2);
let squares = document.querySelectorAll('.square');
let resetbtn = document.getElementById('resetbtn');
let gridsize = document.getElementById('gridsize');
createGrid(16);
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


// for (let i = 0; i < s; i++) {
//     const div = document.createElement('div');
//     div.classList.add('square');
//     grid.appendChild(div);
// }

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
});

function reset() {
    grid.innerHTML = '';
}