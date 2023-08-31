let grid = document.querySelector('.container');
let rows = Number(prompt("number of rows")); //prompt for testing
let s = Math.pow(rows, 2);
let size = 500 / rows;

for (let i = 0; i < s; i++) {
    const div = document.createElement('div');
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.classList.add('square');
    grid.appendChild(div);
}
