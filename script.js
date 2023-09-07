const STARTSIZE = 16;
const STARTCOLOR = 'black';
let grid = document.querySelector('.container');
let resetbtn = document.getElementById('resetbtn');
let sizedisp = document.getElementById('sizedisp');
let sizeslider = document.getElementById('sizeslider');
let colorpicker = document.getElementById('colorpicker');
let eraserbtn = document.getElementById('eraserbtn');
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
    let color = colorpicker.value;
    
});

function createGrid(r) {
    for (let i = 0; i < r * r; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener("mouseover", hoverColor);
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
    
}

function reset() {
    grid.innerHTML = '';
}