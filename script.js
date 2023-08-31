let grid = document.querySelector('.container');
let rows = Number(prompt("number of rows")); //prompt for testing
let s = Math.pow(rows, 2);
grid.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${rows}, 1fr)` ;
let squares = document.querySelectorAll('.square');
let resetbtn = document.getElementById('resetbtn');
let gridsize = document.getElementById('gridsize');
gridsize.innerText = `${rows}x${rows}`
resetbtn.addEventListener('click', reset);


for (let i = 0; i < s; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    grid.appendChild(div);
}

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
});

function reset(){
    grid.innerHTML = '';
}