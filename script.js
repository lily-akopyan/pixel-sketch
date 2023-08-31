let grid = document.querySelector('.container');
let rows = Number(prompt("number of rows")); //prompt for testing
let s = Math.pow(rows, 2);
grid.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${rows}, 1fr)` ;

for (let i = 0; i < s; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    grid.appendChild(div);
}
