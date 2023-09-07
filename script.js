const STARTSIZE = 16;
const STARTCOLOR = 'black';
const grid = document.querySelector('.container');
const resetbtn = document.getElementById('resetbtn');
const sizedisp = document.getElementById('sizedisp');
const sizeslider = document.getElementById('sizeslider');
const colorpicker = document.getElementById('colorpicker');
const eraserbtn = document.getElementById('eraserbtn');
let color = STARTCOLOR;
createGrid(STARTSIZE);
eraserbtn.addEventListener('click', eraser);

resetbtn.addEventListener('click', () =>{
    reset();
    sizeslider.value = `${STARTSIZE}`;
    createGrid(STARTSIZE);
});

sizeslider.addEventListener('input', ()=>{
    let size = sizeslider.value;
    reset();
    createGrid(size);
});

colorpicker.addEventListener('input', ()=>{
    color = colorpicker.value;
});

function createGrid(r) {
    for (let i = 0; i < r * r; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener("mouseover", hoverColor);
        div.addEventListener("touchmove", hoverColor);
        grid.appendChild(div);
    }
    grid.style.gridTemplateColumns = `repeat(${r}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${r}, 1fr)`;
    sizedisp.innerText = `${r}x${r}`;
}

function hoverColor() {
    this.style.backgroundColor = `${color}`;
}

function eraser() {
    color = 'white';
}

function reset() {
    grid.innerHTML = '';
}